import Table from '@/components/Table';
import { DIFFICULTIES } from '@/lib/constants';
import { getPostMetaData } from '@/lib/utils';

export async function generateStaticParams() {
    return DIFFICULTIES.map((item) => ({
        slug: item,
    }));
}

const Topic = (props: any) => {
    const slug = props.params.slug;
    const postMetaData = getPostMetaData();
    const posts = postMetaData.filter((post) => post.difficulty === slug);

    return (
        <>
            <div className="mb-4 flex align-middle gap-x-5">
                <h1 className="text-3xl">
                    Difficulty: <b>{slug}</b>
                </h1>
            </div>
            <Table posts={posts} />
        </>
    );
};

export default Topic;
