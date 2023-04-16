import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components/AppLayout';
import { getAppProps } from '../utils/getAppProps';

export default function TokenPurchase() {
    const handleClick = async () => {
        const result = await fetch(`/api/addTokens`, {
            method: 'POST',
        });
        const json = await result.json();
        console.log('RESULT: ', json);
        window.location.href = json.session.url;
    };

    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className="glass-effect w-3/4 mt-8 py-8 px-8 rounded-md text-center shadow-xl">
                <h1 className="mb-6 font-heading text-xl">Add Tokens</h1>
                <button className="btn w-1/2 mx-auto" onClick={handleClick}>
                    Add tokens
                </button>
            </div>
        </div>
    );
}

TokenPurchase.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        const props = await getAppProps(ctx);
        return {
            props,
        };
    },
});
