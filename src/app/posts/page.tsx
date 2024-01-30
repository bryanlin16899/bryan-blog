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