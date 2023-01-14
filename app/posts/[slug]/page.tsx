import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

import { getPostMetaData } from '@/lib/utils';

const getPostContent = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterData = matter(content);

    return matterData;
};

export async function generateStaticParams() {
    const posts = getPostMetaData();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const Post = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <div>
            <h1 className="text-3xl">{post.data.title}</h1>
            <article className="prose prose-lg max-w-none prose-mark:p-5">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default Post;
