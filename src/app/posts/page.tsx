import { getAllPostIds, getPostData } from "@/lib/posts";
import Link from "next/link";


async function PostsPage() {
    const allPostIds = getAllPostIds();
    const allPostsData = await Promise.all(allPostIds.map((postId) => getPostData(postId.params.id)));

    return (
        <>
            <div className="flex flex-col p-10">
                <div 
                className="flex justify-center p-10 mx-auto w-[60%]"
                style={{
                    backgroundImage: `
                    linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.4)),
                    url('/hero/image1.jpg')`, // Replace with the path to your image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '25vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                    <h1 className="text-4xl text-white">All Posts</h1>
                </div>
                <div className="flex flex-col self-center w-[60%]"> 
                    <div className="border-b-2 border-black" />
                    <div className="flex flex-col mt-10">
                        {allPostsData.map((article) => (
                            <div key={article.id} className="flex flex-col border p-4 mb-4 h-40">
                                <span className="flex justify-end font-thin text-sm text-gray-400">published at 2023.07.01</span>
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