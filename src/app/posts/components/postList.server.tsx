'use server';
import { getAllPostsData } from '@/lib/posts';
import Link from 'next/link';

async function PostList({ category='all' }: { category: string }) {
    const allPostsData = await getAllPostsData(category)
  return (
    <>
    {allPostsData.map((article) => (
        <div key={article.id} className="flex flex-col border p-4 mb-4 h-[170px] overflow-hidden">
        <Link href={`/posts/${article.id}`}>
            <div className="flex justify-between">
                <h1 className="flex text-2xl font-bold mb-5">{article.title}</h1>
                <span className="flex font-thin text-sm text-gray-400">published {article.postDateStr}</span>
            </div>
            <p className="leading-8">{article.shortedDescription}</p>
        </Link>
        </div>
    ))}
    </>
  )
}

export default PostList