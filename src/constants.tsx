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
        icon: <Icon icon="carbon:app-switcher" width="24" height="24"/>,
        path: "/posts",
        submenu: true,
        subMenuItems: [
            { title: "晶片戰爭", path: "/posts/chip-war" },
            { title: "Web Design", path: "/posts/web-design" },
        ]
    },
    {
        title: "Contact",
        icon: <Icon icon="carbon:chat-bot" width="24" height="24"/>,
        path: "/contact",
    },
];