import Link from 'next/link';

import { HomeIcon, RightArrow } from '@/components/Icons';
import Table from '@/components/Table';
import { DIFFICULTIES } from '@/lib/constants';
import { getPostMetaData } from '@/lib/utils';

export async function generateStaticParams() {
    return DIFFICULTIES.map((item) => ({
        slug: item,
    }));
}

const Difficulty = (props: any) => {
    const slug = props.params.slug;
    const postMetaData = getPostMetaData();
    const posts = postMetaData.filter((post) => post.difficulty === slug);

    return (
        <>
            <nav className="flex rounded-lg mb-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link href="/" className="hover:text-blue inline-flex items-center">
                            <HomeIcon />
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <RightArrow />
                            <span className="ml-1 md:ml-2">Difficulties</span>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <RightArrow />
                            <span className="text-blue ml-1 md:ml-2 font-medium first-letter:uppercase">{slug}</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <Table posts={posts} />
        </>
    );
};

export default Difficulty;
