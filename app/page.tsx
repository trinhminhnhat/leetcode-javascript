import PostPreview from '@/components/PostPreview';
import Tag from '@/components/Tag';
import { getPostMetaData } from '@/lib/utils';
import Link from 'next/link';

const Homepage = () => {
    const postMetaData = getPostMetaData();
    const postPreviews = postMetaData.map((post) => <PostPreview key={post.slug} {...post} />);

    return (
        <>
            <h1 className="text-3xl mb-4">List of posts</h1>
            <table className="table-auto w-full border-collapse border">
                <colgroup>
                    <col width="100px" />
                    <col width="auto" />
                    <col width="200px" />
                </colgroup>
                <thead>
                    <tr>
                        <th className="p-2 border bg-blue-500">No</th>
                        <th className="p-2 border bg-blue-500">Title</th>
                        <th className="p-2 border bg-blue-500">Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {postMetaData.map((post) => (
                        <tr key={post.id}>
                            <td className="text-center p-2 border">{post.id}</td>
                            <td className="text-center p-2 border">
                                <Link href={`/posts/${post.slug}`} className="hover:text-blue">
                                    {post.title}
                                </Link>
                            </td>
                            <td className="text-center p-2 border">
                                <Tag difficulty={post.difficulty} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Homepage;
