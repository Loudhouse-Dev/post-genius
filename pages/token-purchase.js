import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function TokenPurchase() {
    return <div>Page to purchase more tokens</div>;
}

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {
            test: 'this is a test',
        },
    };
});
