import { getAllPostsData } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const allPostsData = await getAllPostsData('all', 5);
  
  return (
    <>
    <div
      className="home-hero-image"
    >
      <div className="flex justify-center items-center md:h-[90%]">
        <div className="hidden md:flex flex-col border-l-2 ">
          <div className="text-white text-2xl mt-0 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-1">B</span>oundless curiosity, seeking new horizons</div>
          <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-2">R</span>ealities faced with a truth that binds</div>
          <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-3">Y</span>earning for knowledge, in every experience</div>
          <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-4">A</span>ssessing life with gains and pains</div>
          <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-5">N</span>avigator of life’s vast learning landscape</div>
        </div>
        <div className="flex flex-col border-l-2 md:hidden">
        <div className="text-white text-2xl mt-0 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-1">B</span>oldly curious</div>
          <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-2">R</span>esolute motivation</div>
          <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-3">Y</span>earning learner</div>
          <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-4">A</span>uthentic truth-seeker</div>
          <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-5">N</span>ature's companion</div>
        </div>
      </div>
      <div className="hidden md:flex items-center h-[10%]">
        {allPostsData.map((article, index) => (
          <div className="text-white mr-20 hover:border-b-2">
            <Link href={`/posts/code/${article.id}`}>
              <h1>{article.title}</h1>
              <p className="font-thin text-sm text-gray-400">{article.postDateStr}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
