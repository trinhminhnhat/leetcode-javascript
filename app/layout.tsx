import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const header = (
        <header>
            <div>
                <Link href="/">
                    <h1>LeetCode Solutions - JavaScript</h1>
                </Link>
            </div>
        </header>
    );

    const footer = (
        <footer>
            <div>
                <h3>Designed by Trịnh Minh Nhật</h3>
            </div>
        </footer>
    );

    return (
        <html>
            <head />
            <body>
                {header}
                {children}
                {footer}
            </body>
        </html>
    );
}
