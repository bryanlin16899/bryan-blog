import PostList from '@/app/posts/components/postList.server';
import PostsPage from './components/post-page';
import './styles.css';

function Page({ searchParams } : {searchParams?: { [key: string]: string | string[] | undefined };}) {
    
    const { category } = searchParams ?? { category: 'all' };
    
    return (
        <>
        <PostsPage>
            <PostList category={category} />
        </PostsPage>
        </>
    );
}

export default Page