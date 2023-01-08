import Link from 'next/link';

import { PostMetaData } from '@/models/PostMetaData';

const PostPreview = (props: PostMetaData) => {
    return (
        <div>
            <Link href={`/posts/${props.slug}`}>{props.title}</Link>
            <p>{props.difficult}</p>
        </div>
    );
};

export default PostPreview;
