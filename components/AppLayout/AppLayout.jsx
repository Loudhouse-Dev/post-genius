import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../Logo';

export const AppLayout = ({ children }) => {
    const { user, error, isLoading } = useUser();
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
                    <Link className="text-center" href="/token-purchase">
                        <FontAwesomeIcon
                            icon={faCoins}
                            size="text-sm"
                            className="text-yellow-500"
                        />
                        <span className="pl-1"> 0 Tokens </span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto bg-gradient-to-b from-gray-200 to-gray-300 border-b border-b-gray-400/40 ">
                    Post Listing
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
