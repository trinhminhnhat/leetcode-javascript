import Table from '@/components/Table';
import { getPostMetaData } from '@/lib/utils';

const Homepage = () => {
    const postMetaData = getPostMetaData();

    return (
        <>
            <h1 className="text-3xl mb-5">📚 List of posts</h1>
            <Table posts={postMetaData} />
        </>
    );
};

export default Homepage;
