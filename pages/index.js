import { Logo } from '../components/Logo';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="home-screen w-screen h-screen overflow-hidden flex justify-center items-center relative">
            <div className="overlay"></div>
            <div className="glass-effect relative color-main px-12 py-6 text-center max-w-screen-sm rounded-md shadow-xl">
                <Logo />
                <p>
                    An AI powered SAAS solution to produce blog posts optimized
                    for Search Engine Optimization in seconds. Generate
                    high-quality content and save your time to work on the
                    important stuff
                </p>
                <Link href="/post/new" className="btn mt-4">
                    Get Started
                </Link>
            </div>
        </div>
    );
}
