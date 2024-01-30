import PostHeaderWrapper from "@/components/post-header-wrapper";
import { getPostData } from "@/lib/posts";
import { getRandomNumber } from "@/lib/utils";
import type { SVGProps } from 'react';
import './style.css';

async function ProjectPage() {
  const postData = await getPostData()
  
  return (
    <>
    <PostHeaderWrapper
      title="晶片戰爭"
      description="這本書綜觀了晶片的發展歷史一直到covid-19前後中國面臨的晶片鎖喉，就身在台灣投資台股又是電子背景的我，讀這本書非常有感觸，大學只著重學術上闡述晶片如何從晶圓透過layout、微影、蝕刻、封裝測試後得出晶片，但沒有看過一本書用如此宏觀的視角看半導體如何影響世界局勢及經濟發展，應該是我2023年讀過最優質的書之一。"
      heroNumber={getRandomNumber()}
    />
    <div className="flex m-0">
        <article className="flex prose lg:prose-xl mx-auto">
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </article>
    </div>
    </>
  )
}

export default ProjectPage

export function PhArrowDownBold(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="arrow" width="42px" height="42px" viewBox="0 0 256 256" {...props}><path fill="white" d="m208.49 152.49l-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z"></path></svg>);
}