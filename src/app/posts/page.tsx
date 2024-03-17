import PostList from '@/app/posts/components/postList.server';
import PostsPage from './components/post-page';
import './styles.css';

function Page({ params } : {params: {category: string}}) {
    
    return (
        <>
        <PostsPage>
            <PostList category={params.category} />
        </PostsPage>
        </>
    );
}

export default Page