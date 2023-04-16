import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

export const AppLayout = ({ children }) => {
    const { user, error, isLoading } = useUser();
    return (
        <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen bg-slate-800">
            <div className="flex flex-col text-white overflow-hidden">
                <div className="px-4">
                    <div>logo</div>
                    <Link
                        className="mb-4 bg-green-500 tracking-wider w-full text-sm text-center text-white font-semibold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block"
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
                <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800 border-b border-b-cyan-600/60">
                    Post Listing
                </div>
                <div className="bg-cyan-800 flex items-center gap-3 border-t border-t-cyan-900/50 h-20 px-2">
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
            <div className="bg-white"> {children} </div>
        </div>
    );
};
