import fs from 'fs';
import Link from 'next/link';

const getPostMetaData = () => {
    const folder = 'posts/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));
    const slugs = markdownPosts.map((file) => file.replace('.md', ''));

    return slugs;
};

const Homepage = () => {
    const postMetaData = getPostMetaData();
    const postPreviews = postMetaData.map((slug, index) => (
        <div key={index}>
            <Link href={`/posts/${slug}`}>{slug}</Link>
        </div>
    ));

    return <div>{postPreviews}</div>;
};

export default Homepage;
