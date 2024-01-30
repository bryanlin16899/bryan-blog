'use client'

import useScroll from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { SVGProps } from "react"
import PostTitle from "./post-title"

function PostHeaderWrapper({ title, description, heroNumber=1 }: {
    title: string,
    description: string,
    heroNumber: number
}) {
    const scrolled = useScroll(100)
    return (
        <div
        className="hero-image"
        style={{
            backgroundImage: `
            linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.4)),
            url('/hero/image${heroNumber}.jpg')`, // Replace with the path to your image
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
            <PostTitle 
                title={title}
                description={description}
            />
            <div className={cn(
                `flex relative self-end`,
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