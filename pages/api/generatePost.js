import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { Configuration, OpenAIApi } from 'openai';
import clientPromise from '../../lib/mongodb';

export default withApiAuthRequired(async function handler(req, res) {
    const { user } = await getSession(req, res);
    const client = await clientPromise;
    const db = client.db('post-genius');
    const userProfile = await db.collection('users').findOne({
        auth0Id: user.sub,
    });

    if (!userProfile?.availableTokens) {
        res.status(403);
        return;
    }

    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(config);

    const { postTopic, keywords } = req.body;

    if (!postTopic || !keywords) {
        res.status(422);
        return;
    }

    if (postTopic.length > 80 || keywords.length > 80) {
        res.status(422);
        return;
    }

    //gpt-3.5-turbo model endpoint is createChatCompletion
    //we are going to use the model to generate posts by giving it a series of prompts with different roles
    const postContentResult = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                //There are 3 roles: system, user, and assistant
                role: 'system',
                //here we are using the system role to tell the model what it is
                content: 'You are a blog post generator.',
            },
            {
                //here, we are using the user role to tell the model what we want it to do
                role: 'user',
                content: `Write a long and detailed SEO-friendly blog post about ${postTopic}, that targets the following comma-separated keywords: ${seoKeywords}. 
      The response should be formatted in SEO-friendly HTML, 
      limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`,
            },
        ],
        temperature: 0,
    });

    //the model will return a response with the content of the blog post
    //save the outputted content to a variable
    //we will use this variable to generate the title and meta description
    const postContent = postContentResult.data.choices[0]?.message.content;

    //we do the same here to generate a SEO friendly title tag
    const titleResult = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You are a blog post generator.',
            },
            {
                role: 'user',
                content: `Write a long and detailed SEO-friendly blog post about ${postTopic}, that targets the following comma-separated keywords: ${seoKeywords}. 
      The response should be formatted in SEO-friendly HTML, 
      limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`,
            },
            {
                role: 'assistant',
                content: postContent,
            },
            {
                role: 'user',
                content:
                    'Generate appropriate title tag text for the above blog post',
            },
        ],
        temperature: 0,
    });

    const metaDescriptionResult = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You are a blog post generator.',
            },
            {
                role: 'user',
                content: `Write a long and detailed SEO-friendly blog post about ${postTopic}, that targets the following comma-separated keywords: ${seoKeywords}. 
      The response should be formatted in SEO-friendly HTML, 
      limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`,
            },
            {
                role: 'assistant',
                content: postContent,
            },
            {
                role: 'user',
                content:
                    'Generate SEO-friendly meta description content for the above blog post',
            },
        ],
        temperature: 0,
    });

    const title = titleResult.data.choices[0]?.message.content;
    const metaDescription =
        metaDescriptionResult.data.choices[0]?.message.content;

    console.log('POST CONTENT: ', postContent);
    console.log('TITLE: ', title);
    console.log('META DESCRIPTION: ', metaDescription);

    //in mongodb, we are going to decrement our available tokens by 1
    await db.collection('users').updateOne(
        {
            auth0Id: user.sub,
        },
        {
            $inc: {
                availableTokens: -1,
            },
        }
    );

    const post = await db.collection('posts').insertOne({
        postContent: postContent || '',
        title: title || '',
        metaDescription: metaDescription || '',
        postTopic,
        keywords,
        userId: userProfile._id,
        created: new Date(),
    });

    res.status(200).json({
        postId: post.insertedId,
    });
});
