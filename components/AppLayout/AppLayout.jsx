import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import PostContext from '../../context/postContext';
import { Logo } from '../Logo';

export const AppLayout = ({
    children,
    postId,
    postCreated,
    posts: postsFromSSR,
    availableTokens,
}) => {
    const { user, error, isLoading } = useUser();

    const { setPostsFromSSR, posts, getPosts, noMorePosts } =
        useContext(PostContext);

    useEffect(() => {
        setPostsFromSSR(postsFromSSR);
        if (postId) {
            const postExists = posts.find((post) => post._id === postId);
            if (!postExists) {
                getPosts({ getNewestPosts: true, lastPostDate: postCreated });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postsFromSSR, setPostsFromSSR, postId, postCreated, getPosts]);

    return (
        <div className="xl:grid xl:grid-cols-[400px_1fr] xl:h-screen xl:max-h-screen shadow-xl">
            <div className="glass-effect flex flex-col text-black max-h-full">
                <div className="px-4">
                    <div className="py-6 px-6">
                        <Logo />
                    </div>
                    <Link className="btn" href="/post/new">
                        Add Post
                    </Link>
                    <Link
                        className="block text-center mb-8 bg-zinc-700 text-white py-2 rounded-md"
                        href="/token-purchase"
                    >
                        <FontAwesomeIcon
                            icon={faCoins}
                            size="sm"
                            className="inline-block text-center text-yellow-500"
                        />
                        <span className="pl-1 uppercase">
                            {' '}
                            {availableTokens} Tokens Left{' '}
                        </span>
                    </Link>
                </div>
                <h4 className="text-center font-heading"> Previous Posts</h4>
                <div className="px-4 flex-1 overflow-auto">
                    {posts?.map((post) => (
                        <Link
                            key={post._id}
                            href={`/post/${post._id}`}
                            className={`py-3 block text-ellipsis overflow-hidden whitespace-nowrap my-2 px-2 rounded-md bg-white/10 cursor-pointer ${
                                postId === post._id
                                    ? 'bg-secondary text-white'
                                    : ''
                            }`}
                        >
                            {post.postTopic}
                        </Link>
                    ))}
                    {!noMorePosts && (
                        <div
                            onClick={() => {
                                getPosts({
                                    lastPostDate:
                                        posts[posts.length - 1].created,
                                });
                            }}
                            className="btn-secondary"
                        >
                            Load more posts
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-3 h-40 px-2">
                    {!!user ? (
                        <>
                            <div className="min-w-[50px]">
                                <Image
                                    className="rounded-full"
                                    src={user.picture}
                                    alt={user.name}
                                    height={50}
                                    width={50}
                                />
                            </div>
                            <div className="flex-1">
                                <div className="font-light mb-2">
                                    {user.email}
                                </div>
                                <Link className="btn" href="/api/auth/logout">
                                    Log Out
                                </Link>
                            </div>
                        </>
                    ) : (
                        <Link href="/api/auth/login">Login</Link>
                    )}
                    <div></div>
                </div>
            </div>
            <div> {children} </div>
        </div>
    );
};
