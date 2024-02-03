import { getAllPostIds, getPostData } from "@/lib/posts";
import Link from "next/link";


async function PostsPage() {
    const allPostIds = getAllPostIds();
    const allPostsData = await Promise.all(allPostIds.map((postId) => getPostData(postId.params.id)));

    return (
        <>
            <div className="flex flex-col w-screen p-10">
                <div className="flex justify-center p-10">
                    <h1 className="text-4xl">All Posts</h1>
                </div>
                
                <div className="flex flex-col self-center w-[60%]"> 
                    <div className="border-b-2 border-black" />
                    <div className="flex flex-col mt-10">
                        {allPostsData.map((article) => (
                            <div key={article.id} className="flex flex-col border p-4 mb-4">
                                <span className="flex justify-end font-thin text-sm text-gray-400 mb-2">published at 2023.07.01</span>
                                <Link href={`/posts/code/${article.id}`}>
                                <>
                                <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
                                <p className="leading-8">{article.description}</p>
                                </>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsPage