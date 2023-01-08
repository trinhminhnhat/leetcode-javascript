import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

import { PostMetaData } from '../models/PostMetaData';

const getPostMetaData = (): PostMetaData[] => {
    const folder = 'posts/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));

    const posts = markdownPosts.map((fileName) => {
        const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf8');
        const matterResult = matter(fileContent);

        return {
            title: matterResult.data.title,
            difficult: matterResult.data.difficult,
            slug: fileName.replace('.md', ''),
        };
    });

    return posts;
};

const Homepage = () => {
    const postMetaData = getPostMetaData();
    const postPreviews = postMetaData.map((post, index) => (
        <div key={index}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            <p>{post.difficult}</p>
        </div>
    ));

    return <div>{postPreviews}</div>;
};

export default Homepage;
