import { getPostData } from "@/lib/posts";
import './style.css';

async function ProjectPage() {
  const postData = await getPostData()
  
  return (
    <>
    <div
      className="hero-image"
      style={{
        backgroundImage: `
        linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.4)),
        url('/image3.jpg')`, // Replace with the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
      }}
    >
      <h1 className="post-title">晶片戰爭</h1>
      {/* <div className="flex flex-col">
        <p>
          這本書綜觀了晶片的發展歷史一直到covid-19前後中國面臨的晶片鎖喉，就身在台灣投資台股又是電子背景的我，讀這本書非常有感觸，大學只著重學術上闡述晶片如何從晶圓透過layout、微影、蝕刻、封裝測試後得出晶片，但沒有看過一本書用如此宏觀的視角看半導體如何影響世界局勢及經濟發展，應該是我2023年讀過最優質的書之一
        </p>
      </div> */}
    </div>
    <div className="flex m-0">
        <article className="flex prose lg:prose-xl mx-auto">
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </article>
    </div>
    </>
  )
}

export default ProjectPage