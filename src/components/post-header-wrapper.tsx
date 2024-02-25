'use client'

import { HERO_BLUR_BASE64 } from "@/constants"
import useScroll from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"
import Image from "next/legacy/image"
import { SVGProps } from "react"
import PostTitle from "./post-title"

function PostHeaderWrapper({ title, description, heroNumber=1, category }: {
    title: string,
    description: string,
    heroNumber: number,
    category: string
}) {
    const scrolled = useScroll(100)
    const base64 = HERO_BLUR_BASE64[`/hero/image${heroNumber}.jpg` as keyof typeof HERO_BLUR_BASE64]

    // useEffect(() => {
    //     (async () => {
    //         const _base64 = await fetch('/api/getBase64', {
    //             method: 'POST',
    //             body: JSON.stringify({ url: `/hero/image13.jpg` })
    //         });
    //         const bsee64 = await _base64.json()
    //         // setBase64(bsee64.base64);
    //     })()
    // })
       
    return (
        <div
        className="h-screen"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginBottom: '10px',
            zIndex: -1
        }}
        >
            <div className="absolute w-[100%] h-[100%]">
                <Image
                    src={`/hero/image${heroNumber}.jpg`}
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={base64}
                />
            </div>
            <PostTitle 
                title={title}
                description={description}
                category={category}
            />
            <div className={cn(
                `flex self-end`,
                (
                    scrolled ? `hidden` : ``
                )
                )}>
                <PhArrowDownBold />
            </div>
        </div>
    )
}

export default PostHeaderWrapper

export function PhArrowDownBold(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" className="arrow" width="42px" height="42px" viewBox="0 0 256 256" {...props}><path fill="white" d="m208.49 152.49l-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z"></path></svg>);
}