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
        title: "Projects",
        icon: <Icon icon="carbon:app-switcher" width="24" height="24"/>,
        path: "/projects",
        submenu: true,
        subMenuItems: [
            { title: "All", path: "/projects" },
            { title: "Web Design", path: "/projects/web-design" },
        ]
    },
    {
        title: "Contact",
        icon: <Icon icon="carbon:chat-bot" width="24" height="24"/>,
        path: "/contact",
    },
];