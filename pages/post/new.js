import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AppLayout } from '../../components/AppLayout';
import { getAppProps } from '../../utils/getAppProps';

export default function NewPost(props) {
    const router = useRouter();

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

    return (
        <div className="flex items-center justify-center h-full w-full">
            {!!generating && (
                <div className="flex h-full animate-pulse w-full flex-col justify-center items-center">
                    <FontAwesomeIcon
                        icon={faBrain}
                        className="text-white text-8xl"
                    />
                    <h6 className="text-white">Generating...</h6>
                </div>
            )}
            {!generating && (
                <div className="glass-effect w-3/4 mt-8 py-8 px-8 rounded-md text-center shadow-xl max-w-screen-sm mx-auto">
                    <form
                        onSubmit={handleSubmit}
                        className="m-auto w-full max-w-screen-sm bg-slate-700 text-white p-6 rounded-md"
                    >
                        <div>
                            <label>
                                <strong>
                                    Generate a blog post on the topic of:
                                </strong>
                            </label>
                            <textarea
                                className="text-black resize-none w-full block my-2 px-4 py-2 rounded-sm"
                                value={postTopic}
                                onChange={(e) => setPostTopic(e.target.value)}
                                maxLength={80}
                            />
                        </div>
                        <div>
                            <label>
                                <strong>
                                    Enter the SEO keywords you want to target:
                                </strong>
                            </label>
                            <textarea
                                className="text-black resize-none border border-slate-500 w-full block my-2 px-4 py-2 rounded-sm"
                                value={seoKeywords}
                                onChange={(e) => setSeoKeywords(e.target.value)}
                                maxLength={80}
                            />
                            <small className="block mb-2">
                                *Make sure to separate each keyword with a comma
                            </small>
                        </div>
                        <button
                            type="submit"
                            className="btn"
                            disabled={!postTopic.trim() || !seoKeywords.trim()}
                        >
                            Generate
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

NewPost.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        const props = await getAppProps(ctx);

        if (!props.availableTokens) {
            return {
                redirect: {
                    destination: '/token-purchase',
                    permanent: false,
                },
            };
        }

        return {
            props,
        };
    },
});
