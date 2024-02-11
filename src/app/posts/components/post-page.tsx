'use client';
import Category from './category';

function PostsPage({ children }: { children: React.ReactNode}) {
    
    return (
    <>
    <div className="p-2 pt-10 flex flex-col md:p-10">
        <div className="hero-image">
            <h1 className="text-4xl text-white">All Posts</h1>
        </div>
        <div className="posts-list"> 
            <Category />
            <div className="flex flex-col mt-10">
            {children}
            </div>
        </div>
    </div>
    </>
    );
}

export default PostsPage