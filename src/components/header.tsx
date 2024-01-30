"use client"

import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

function Header() {
    const scrolled = useScroll(5);
    const selectedLayout = useSelectedLayoutSegment();

    return (
        <div
            className={cn(
                `sticky inset-x-0 top-0 z-30 w-full transition-all bg-black/30 backdrop-blur-lg`,
                // {
                //     "bg-white/30 backdrop-blur-lg": scrolled,
                //     "bg-white backdrop-blur-lg": selectedLayout,
                // }
            )}
        >
            {/* <div className="flex h-[47px] items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <Link
                        href= "/"
                        className="flex flex-row space-x-3 items-center justify-center md:hidden"
                    >
                        <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
                        <span className="font-bold text-xl flex">Logo</span>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default Header