import { getAllPostsData } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const allPostsData = await getAllPostsData('all', 3);
  
  return (
    <>
    <div
      className="home-hero-image"
    >
      <div style={{ zIndex: -1, position: 'fixed', width: "100vw", height: "100vh" }}>
        <Image alt="hero" priority src={'/hero/image12.jpg'} fill quality={100} style={{objectFit:"cover"}}/>
      </div>
      <div className="flex flex-col justify-center items-center md:h-[90%]">
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
          <div className="text-white text-2xl mt-4 ml-1"><span className="font-bold text-6xl mr-1 acrostic-head-5">N</span>ature&apos;s companion</div>
        </div>
        <div className="flex md:self-end mt-5 text-white text-2xl py-3 border-b-2 hover:border-gray-400">
          <Link href={`/aboutme`}>
            About Me :D &nbsp;
          </Link>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32"></path></svg>
        </div>
      </div>
      <div className="hidden md:flex items-center h-[10%]">
        {allPostsData.map((article, index) => (
          <div key={index} className="flex flex-col justify-between text-white max-w-[280px] min-h-[70px] text-pretty mr-20 hover:border-b-2">
            <Link href={`/posts/code/${article.id}`}>
              <h1>{article.title}</h1>
            </Link>
            <p className="font-thin text-sm text-gray-400">{article.postDateStr}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
