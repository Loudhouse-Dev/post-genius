import { getSession } from '@auth0/nextjs-auth0';
import clientPromise from '../../lib/mongodb';
import stripeInit from 'stripe';

const stripe = stripeInit(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    //destructure user from session
    //check for active section (is user logged in?)
    const { user } = await getSession(req, res);
    console.log('user: ', user);

    //Set up Stripe Checkout Session
    //normally an array of objects (products), but we only have one product
    const lineItems = [
        {
            price: process.env.STRIPE_PRODUCT_PRICE_ID,
            //can only purchase 10 tokens ata time
            quantity: 1,
        },
    ];

    const client = await clientPromise;
    const db = client.db('post-genius');

    //check if user.sub exists in db
    //if not use upsert to create a new document for user.sub
    //if so, increment availableTokens by 10
    const userProfile = await db.collection('users').updateOne(
        {
            auth0Id: user.sub,
        },
        {
            $inc: {
                availableTokens: 10,
            },
            $setOnInsert: {
                auth0Id: user.sub,
            },
        },
        {
            upsert: true,
        }
    );

    const protocol =
        //http for local, https for prod
        process.env.NODE_ENV === 'https://';
    const host = req.headers.host;

    //init a Stripe Checkout Session
    const checkoutSession = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${protocol}${host}/success`,
        //here we use the user.sub from Auth0 to pass to Stripe
        payment_intent_data: {
            metadata: {
                sub: user.sub,
            },
        },
        //metadata must be passed to both places
        metadata: {
            sub: user.sub,
        },
    });

    console.log('user: ', user);

    //on success, redirect to success page
    res.status(200).json({ session: checkoutSession });
}
