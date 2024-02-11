import PostHeaderWrapper from "@/components/post-header-wrapper";
import TableOfContent from "@/components/table-of-content";
import { getPostData } from "@/lib/posts";
import { getRandomNumber } from "@/lib/utils";
import './style.css';

async function Post({ params } : {params: {id: string}}) { 
  const postData = await getPostData(params.id)
  const tableOfContent = postData.tableOfContent
  
  return (
    <>
    <PostHeaderWrapper
      title={postData.title}
      description={postData.description}
      heroNumber={getRandomNumber()}
      category={postData.category}
    />
    <div className="relative grid grid-cols-8"> {/* Add justify-center class */}
      <article className="prose grid col-start-3 col-end-7 lg:prose-xl mx-auto">
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
      </article>
      <div className="sticky top-3 left-3 h-2 mt-12 col-start-7 col-end-9 prose hidden lg:block">
        <TableOfContent
          contents={tableOfContent}
        />
      </div>
    </div>
    </>
  )
}

export default Post
