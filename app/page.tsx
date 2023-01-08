import PostPreview from '@/components/PostPreview';
import { getPostMetaData } from '@/lib/utils';

const Homepage = () => {
    const postMetaData = getPostMetaData();
    const postPreviews = postMetaData.map((post) => <PostPreview key={post.slug} {...post} />);

    return <div>{postPreviews}</div>;
};

export default Homepage;
