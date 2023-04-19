import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Archivo, Archivo_Black } from '@next/font/google';
import { PostProvider } from '../context/postContext';

const archivo = Archivo({
    weight: ['100', '200', '300', '400', '500'],
    subsets: ['latin'],
    variable: '--font-archivo',
});

const archivoBlack = Archivo_Black({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-archivo-black',
});

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <UserProvider>
            <PostProvider>
                <main
                    className={`${archivo.variable} ${archivoBlack.variable} font-body xl:overflow-hidden xl:h-screen`}
                >
                    {getLayout(<Component {...pageProps} />, pageProps)}
                </main>
            </PostProvider>
        </UserProvider>
    );
}

export default MyApp;
