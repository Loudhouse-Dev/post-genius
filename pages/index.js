//...
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
    const { user, error, isLoading } = useUser();
    console.log('User: ', user);

    return (
        <div>
            <h1>This is the Homepage</h1>
            {!!user ? (
                <>
                    <div>
                        <Image
                            src={user.picture}
                            alt={user.name}
                            height={50}
                            width={50}
                        />
                        <div>{user.email}</div>
                    </div>
                    <Link href="/api/auth/logout">Log Out</Link>
                </>
            ) : (
                <Link href="/api/auth/login">Login</Link>
            )}
            <div></div>
        </div>
    );
}
