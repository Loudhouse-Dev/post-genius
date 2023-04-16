import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components';

export default function TokenPurchase() {
    return <div>Page to purchase more tokens</div>;
}

TokenPurchase.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {
            test: 'this is a test',
        },
    };
});
