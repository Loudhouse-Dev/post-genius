import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../Logo';
import BGImg from '../../public/post-genius-bg.webp';

export const AppLayout = ({ children }) => {
    const { user, error, isLoading } = useUser();
    return (
        <div className="grid grid-cols-[400px_1fr] h-screen max-h-screen bg-gray-200 shadow-xl">
            <div className="flex flex-col text-black overflow-hidden">
                <div className="px-4">
                    <div className="py-6 px-6">
                        <Logo />
                    </div>
                    <Link
                        className="mb-4 pointer-events-auto bg-teal-500 tracking-wider w-full text-sm text-center text-white font-semibold hover:cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-teal-800 transition-colors block"
                        href="/post/new"
                    >
                        Add Post
                    </Link>
                    <Link className="block text-center" href="/token-purchase">
                        <FontAwesomeIcon
                            icon={faCoins}
                            className="text-yellow-500"
                        />
                        <span className="pl-1"> 0 Tokens </span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto bg-gradient-to-b from-gray-200 to-gray-400 border-b border-b-gray-400/60">
                    Post Listing
                </div>
                <div className="bg-gray-400 flex items-center gap-3 border-t border-t-gray-500/50 h-20 px-2">
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
                                <div className="font-bold">{user.email}</div>
                                <Link
                                    className="text-sm"
                                    href="/api/auth/logout"
                                >
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
