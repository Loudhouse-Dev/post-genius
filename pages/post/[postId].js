import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ObjectId } from 'mongodb';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AppLayout } from '../../components/AppLayout';
import PostContext from '../../context/postContext';
import clientPromise from '../../lib/mongodb';
import { getAppProps } from '../../utils/getAppProps';

export default function Post(props) {
    const router = useRouter();
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const { deletePost } = useContext(PostContext);

    const handleDeleteConfirm = async () => {
        try {
            const response = await fetch(`/api/deletePost`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ postId: props.id }),
            });
            const json = await response.json();
            if (json.success) {
                deletePost(props.id);
                router.replace(`/post/new`);
            }
        } catch (e) {}
    };

    return (
        <div className="flex lg:items-center justify-center xl:h-screen xl:max-h-screen w-full">
            <div className="glass-effect w-3/4 mt-8 p-8 rounded-md shadow-xl h-5/6 max-w-screen-sm mx-auto overflow-y-scroll">
                <h4 className="heading">SEO title and meta description</h4>
                <div className="p-4 pt-0 my-2 rounded-md">
                    <div className="font-heading text-zinc-800 text-2xl font-bold">
                        {props.title}
                    </div>
                    <div className="mt-2">{props.metaDescription}</div>
                </div>
                <h4 className="heading">Keywords</h4>
                <div className="flex flex-wrap pt-2 gap-2">
                    {props.seoKeywords.split(',').map((keyword, i) => (
                        <div
                            key={i}
                            className="text-xs uppercase p-4 rounded-lg bg-secondary text-neutral-200 border-0"
                        >
                            <span>{keyword}</span>
                        </div>
                    ))}
                </div>

                <div
                    className="post-content text-left"
                    dangerouslySetInnerHTML={{
                        __html: props.postContent || '',
                    }}
                />
                <div className="my-4">
                    {!showDeleteConfirm && (
                        <button
                            className="btn bg-red-600 hover:bg-red-700"
                            onClick={() => setShowDeleteConfirm(true)}
                        >
                            Delete post
                        </button>
                    )}
                    {!!showDeleteConfirm && (
                        <div>
                            <p className="p-2 bg-red-300 text-center">
                                Are you sure you want to delete this post? This
                                action is irreversible
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setShowDeleteConfirm(false)}
                                    className="btn bg-stone-600 hover:bg-stone-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDeleteConfirm}
                                    className="btn bg-red-600 hover:bg-red-700"
                                >
                                    Confirm Delete
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Post.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        const props = await getAppProps(ctx);
        const userSession = await getSession(ctx.req, ctx.res);
        const client = await clientPromise;
        const db = client.db('post-genius');
        const user = await db.collection('users').findOne({
            auth0Id: userSession.user.sub,
        });
        const post = await db.collection('posts').findOne({
            _id: new ObjectId(ctx.params.postId),
            userId: user._id,
        });

        if (!post) {
            return {
                redirect: {
                    destination: '/post/new',
                    permanent: false,
                },
            };
        }

        return {
            props: {
                id: ctx.params.postId,
                postContent: post.postContent,
                title: post.title,
                metaDescription: post.metaDescription,
                seoKeywords: post.seoKeywords,
                postCreated: post.created.toString(),
                ...props,
            },
        };
    },
});
