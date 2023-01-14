import Link from 'next/link';

import 'styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const header = (
        <header className="text-center p-10 text-4xl font-bold bg-primary">
            <Link href="/">
                <h1>LeetCode Solutions - JavaScript</h1>
            </Link>
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
                    <div className="max-w-7xl mx-auto p-10">{children}</div>
                    {footer}
                </div>
            </body>
        </html>
    );
}
