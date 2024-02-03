import PostHeaderWrapper from "@/components/post-header-wrapper";
import { getPostData } from "@/lib/posts";
import { getRandomNumber } from "@/lib/utils";
import type { SVGProps } from 'react';
import './style.css';

async function Post({ params } : {params: {id: string}}) { 
  const postData = await getPostData(params.id)  
  
  return (
    <>
    <PostHeaderWrapper
      title={postData.title}
      description={postData.description}
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

export default Post

export function PhArrowDownBold(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="arrow" width="42px" height="42px" viewBox="0 0 256 256" {...props}><path fill="white" d="m208.49 152.49l-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z"></path></svg>);
}