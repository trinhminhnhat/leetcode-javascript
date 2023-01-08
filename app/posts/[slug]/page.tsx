import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterData = matter(content);

    return matterData;
};

const Post = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <div>
            Post {slug}
            <div>
                <Markdown>{post.content}</Markdown>
            </div>
        </div>
    );
};

export default Post;
