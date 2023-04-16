import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Post(props) {
    return <div>This is the Single Post page</div>;
}

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {
            test: 'this is a test',
        },
    };
});
