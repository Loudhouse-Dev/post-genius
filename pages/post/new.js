import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AppLayout } from '../../components/AppLayout';
import { getAppProps } from '../../utils/getAppProps';

export default function NewPost(props) {
    router = useRouter();

    //state variables for the form
    const [postTopic, setPostTopic] = useState('');
    const [seoKeywords, setSeoKeywords] = useState('');
    const [generating, setGenerating] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGenerating(true);
        try {
            const response = await fetch('/api/generatePost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ postTopic, seoKeywords }),
            });
            const data = await response.json();
            console.log('Data: ', data);
            setGenerating(false);
            if (data?.postId) {
                router.push(`/post/${data.postId}`);
            }
        } catch (error) {
            setGenerating(false);
            console.log('Error: ', error);
        }
    };
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
