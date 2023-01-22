import Link from 'next/link';
import React from 'react';
import { HomeIcon, RightArrow } from './Icons';

interface Links {
    to: string;
    name: string;
    selected?: boolean;
}

const Breadcrumbs = ({ links }: { links: Links[] }) => {
    const lastIndex = links.length - 1;

    return (
        <nav className="flex rounded-lg mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link href="/" className="hover:text-blue inline-flex items-center">
                        <HomeIcon />
                        Home
                    </Link>
                </li>
                {links.map((item, index) => (
                    <li key={index}>
                        <div className="flex items-center">
                            <RightArrow />
                            {lastIndex ? (
                                <span className={`text-blue ml-1 md:ml-2`}>{item.name}</span>
                            ) : (
                                <Link href={item.to} className={`ml-1 md:ml-2 font-medium first-letter:uppercase`}>
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
