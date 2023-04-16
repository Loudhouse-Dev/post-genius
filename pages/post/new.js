import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../../components/AppLayout';

export default function NewPost(props) {
    console.log('New Post Props: ', props);

    const handleClick = async () => {
        const response = await fetch('/api/generatePost', {
            method: 'POST',
        });
        const data = await response.json();
        console.log('Data: ', data);
    };

    return (
        <div>
            <h1>This is the New Post page</h1>
            <button className="btn" onClick={handleClick}>
                Generate Post
            </button>
        </div>
    );
}

NewPost.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {
            test: 'this is a test',
        },
    };
});
