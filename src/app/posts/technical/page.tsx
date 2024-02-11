import PostList from '@/app/posts/components/postList.server';
import PostsPage from '../components/post-page';

function Page() {
    return (
        <>
        <PostsPage>
            <PostList category='technical' />
        </PostsPage>
        </>
    );
}

export default Page