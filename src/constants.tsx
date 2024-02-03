import { Icon } from "@iconify/react";
import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Home",
        icon: <Icon icon="carbon:home" width="24" height="24"/>,
        path: "/",
    },
    {
        title: "Profolio",
        icon: <Icon icon="carbon:user-avatar" width="24" height="24"/>,
        path: "/profolio",
    },
    {
        title: "Posts",
        icon: <Icon icon="mdi:post-it-note-text-outline" width="24" height="24"/>,
        path: "/posts",
        submenu: true,
        subMenuItems: [
            { icon: <Icon icon="codicon:vscode" width="24" height="24"/>, path: "/posts/code" },
            { icon: <Icon icon="material-symbols-light:auto-awesome-mosaic" width="24" height="24"/>, path: "/posts/other" },
        ]
    },
    {
        title: "Contact",
        icon: <Icon icon="carbon:chat-bot" width="24" height="24"/>,
        path: "/contact",
    },
];

// export const ALL_PSOTS = [
//     {
//         id: 1,
//         title: "晶片戰爭",
//         description: "這本書綜觀了晶片的發展歷史一直到covid-19前後中國面臨的晶片鎖喉，就身在台灣投資台股又是電子背景的我，讀這本書非常有感觸，大學只著重學術上闡述晶片如何從晶圓透過layout、微影、蝕刻、封裝測試後得出晶片，但沒有看過一本書用如此宏觀的視角看半導體如何影響世界局勢及經濟發展，應該是我2023年讀過最優質的書之一。"
//     },
//     ]