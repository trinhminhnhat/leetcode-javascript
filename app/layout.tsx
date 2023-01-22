import DifficultyWidget from '@/components/DifficultyWidget';
import TopicWidget from '@/components/TopicWidget';
import Link from 'next/link';

import 'styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const header = (
        <header className="text-center p-10 bg-primary">
            <Link href="/" className="text-4xl font-bold mb-3 block">
                <h1>LeetCode Solutions</h1>
            </Link>
            <p className="text-small italic">Solve with Javascript</p>
        </header>
    );

    const footer = (
        <footer className="sticky top-[100vh] text-center p-5 text-lg font-bold bg-primary">
            <h3>
                &#169; {new Date().getFullYear()}. Created by{' '}
                <a
                    className="underline text-blue"
                    href="https://github.com/trinhminhnhat/leetcode-javascript"
                    target="_blank"
                    rel="noreferrer"
                >
                    Trịnh Minh Nhật
                </a>
            </h3>
        </footer>
    );

    return (
        <html>
            <head />
            <body>
                <div className="min-h-screen">
                    {header}
                    <div className="grid md:grid-cols-3 md:gap-x-16 p-10 max-w-7xl mx-auto">
                        <div className="md:col-span-2 order-2 md:order-none">{children}</div>
                        <div className='flex flex-col mb-8 md:mb-0 gap-y-8 md:gap-y-10 order-1 md:order-none'>
                            <DifficultyWidget />
                            <TopicWidget />
                        </div>
                    </div>
                    {footer}
                </div>
            </body>
        </html>
    );
}
