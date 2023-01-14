import fs from 'fs';
import matter from 'gray-matter';

import { PostMetaData } from '@/models/PostMetaData';

const getPostMetaData = (): PostMetaData[] => {
    const folder = 'posts/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));

    const posts = markdownPosts.map((fileName) => {
        const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf8');
        const matterResult = matter(fileContent);

        return {
            id: matterResult.data.id,
            title: matterResult.data.title,
            difficulty: matterResult.data.difficulty,
            topics: matterResult.data.topics,
            slug: fileName.replace('.md', ''),
        };
    });

    return posts.sort((a, b) => a.id - b.id);
};

export { getPostMetaData };

