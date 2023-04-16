import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function NewPost(props) {
    console.log('New Post Props: ', props);
    return <div>This is the New Post page</div>;
}

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {
            test: 'this is a test',
        },
    };
});
