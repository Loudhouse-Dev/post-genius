import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Archivo, Archivo_Black } from '@next/font/google';

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
            <main
                className={`${archivo.variable} ${archivoBlack.variable} font-body`}
            >
                {getLayout(<Component {...pageProps} />, pageProps)}
            </main>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;
