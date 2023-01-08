import fs from 'fs';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');

    return content;
};

const Post = (props: any) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);

    return (
        <div>
            Post {slug}
            <div>
                <Markdown>{content}</Markdown>
            </div>
        </div>
    );
};

export default Post;
