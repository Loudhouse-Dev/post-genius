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
    tokensAvailable,
}) => {
    const { user, error, isLoading } = useUser();

    const { setPostsFromSSr, posts, getPosts, noMorePosts } =
        useContext(PostContext);

    useEffect(() => {
        setPostsFromSSr(postsFromSSR);
        if (postId) {
            const postExists = posts.find((post) => post._id === postId);
            if (!postExists) {
                getPosts({ getNewestPosts: true, lastPostDate: postCreated });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postsFromSSR, setPostsFromSSr, postId, postCreated, getPosts]);

    return (
        <div className="grid grid-cols-[400px_1fr] h-screen max-h-screen bg-gray-200 shadow-xl">
            <div className="flex flex-col text-black overflow-hidden border-r border-r-gray-500/40">
                <div className="px-4">
                    <div className="py-6 px-6">
                        <Logo />
                    </div>
                    <Link className="btn" href="/post/new">
                        Add Post
                    </Link>
                    <Link
                        className="block text-center bg-zinc-700 text-white py-2 rounded-md"
                        href="/token-purchase"
                    >
                        <FontAwesomeIcon
                            icon={faCoins}
                            size="text-sm"
                            className="inline-block text-center text-yellow-500"
                        />
                        <span className="pl-1">
                            {' '}
                            {tokensAvailable} Tokens Left{' '}
                        </span>
                    </Link>
                </div>
                <div className="px-4 flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
                    {posts.map((post) => (
                        <Link
                            key={post._id}
                            href={`/post/${post._id}`}
                            className={`py-1 border border-white/0 block text-ellipsis overflow-hidden whitespace-nowrap my-1 px-2 bg-white/10 cursor-pointer rounded-sm ${
                                postId === post._id
                                    ? 'bg-white/20 border-white'
                                    : ''
                            }`}
                        >
                            {post.topic}
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
                            className="hover:underline text-sm text-slate-400 text-center cursor-pointer mt-4"
                        >
                            Load more posts
                        </div>
                    )}
                </div>
                <div className="bg-gray-300 flex items-center gap-3 border-t border-t-gray-200/60 h-40 px-2">
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
            <div className="page-wrap"> {children} </div>
        </div>
    );
};
