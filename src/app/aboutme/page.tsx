import { getAboutMeData } from "@/lib/posts"
import Image from "next/image"
import './styles.css'

async function page() {
    const processedContent = await getAboutMeData()
  return (
    <div className="flex flex-col px-2 justify-center flex-grow items-center bg-slate-500 md:p-10">
        <Image
            src="/bryanAvatar.png"
            alt="Picture of the author"
            width={500}
            height={500}
        />
        <div className="flex flex-grow w-[100%] md:w-[60%] mt-6 border-2 border-red-50 prose prose-md p-5">
            <div className="about-me-content" dangerouslySetInnerHTML={{__html: processedContent.contentHtml}}/>
        </div>
    </div>
  )
}

export default page