import { Icon } from "@iconify/react";
import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Home",
        icon: <Icon icon="carbon:home" width="24" height="24"/>,
        path: "/",
        tooltip: "首頁",
    },
    // {
    //     title: "Profolio",
    //     icon: <Icon icon="carbon:user-avatar" width="24" height="24"/>,
    //     path: "/profolio",
    // },
    {
        title: "Posts",
        icon: <Icon icon="mdi:post-it-note-text-outline" width="24" height="24"/>,
        path: "/posts/all",
        tooltip: "文章",
        // submenu: true,
        // subMenuItems: [
        //     { icon: <Icon icon="codicon:vscode" width="24" height="24"/>, path: "/posts/code" },
        //     { icon: <Icon icon="material-symbols-light:auto-awesome-mosaic" width="24" height="24"/>, path: "/posts/other" },
        // ]
    },
    {
        title: "About Me",
        icon: <Icon icon="carbon:chat-bot" width="24" height="24"/>,
        path: "/aboutme",
        tooltip: "關於我",
    },
    {
        title: "Portfolio",
        icon: <Icon icon="carbon:portfolio" width="24" height="24"/>,
        path: "/portfolio",
        tooltip: "經歷"
    }
];

export const SOCIAL_LINKS: SideNavItem[] = [
    {
        title: "Github",
        icon: <Icon icon="akar-icons:github-fill" width="24" height="24" />,
        path: "https://github.com/bryanlin16899",
    },
    {
        title: "LinkedIn",
        icon: <Icon icon="akar-icons:linkedin-fill" width="24" height="24" />,
        path: "https://www.linkedin.com/in/bryan-lin-taiwan/",
    }
]

// export const ALL_PSOTS = [
//     {
//         id: 1,
//         title: "晶片戰爭",
//         description: "這本書綜觀了晶片的發展歷史一直到covid-19前後中國面臨的晶片鎖喉，就身在台灣投資台股又是電子背景的我，讀這本書非常有感觸，大學只著重學術上闡述晶片如何從晶圓透過layout、微影、蝕刻、封裝測試後得出晶片，但沒有看過一本書用如此宏觀的視角看半導體如何影響世界局勢及經濟發展，應該是我2023年讀過最優質的書之一。"
//     },
//     ]

export const HERO_BLUR_BASE64 = {
    '/hero/image1.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGPQ0jYMCgwT5OU10tNnuH7qyP+vHxQlBJPC/QFhuAjVxdOIcQAAAABJRU5ErkJggg==',
    '/hero/image2.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49P//zJv/Oy/+b9r3ioGBRYKBT15K24JZUAYAxSUKu0DQsr0AAAAASUVORK5CYII=',
    '/hero/image3.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO49OP/uX//23c+ccrtYdDWVMxIS9PXN2Jg4wAAxyULO5MoB5wAAAAASUVORK5CYII=',
    '/hero/image4.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOYfOF/+9HfWx78f/LvP4O7r5+GrrGihgEDhwgA0bIMHW584UYAAAAASUVORK5CYII=',
    '/hero/image5.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO48P9/zq7/qTv+5+75z8DAJsUpqaVt7u7kGw4AvUILM7St3OIAAAAASUVORK5CYII=',
    '/hero/image6.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNYtWnn81//e9eet4urYrC2tXfzC1PRMWFgZQMAtGYKRTU6M0kAAAAASUVORK5CYII=',
    '/hero/image7.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGN48P//9X//L/z/f/T7fwZWBk4fb39LUzNba2sA53ENh8N3tj4AAAAASUVORK5CYII=',
    '/hero/image8.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGO48+f/9BP/j7z9v//xfwYGDlEZDTMDhwBrvwQA1u4Mx7SY0GsAAAAASUVORK5CYII=',
    '/hero/image9.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/ABUAAPbl0uvd0KScmAB9ZU3/9M/74rxOOyO3Lw5pIGuo/gAAAABJRU5ErkJggg==',
    '/hero/image10.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPQTluYMPnU4nP/b/z/z6CvIcXAJqaubWRoYQsAn9UJ7SEBRdkAAAAASUVORK5CYII=',
    '/hero/image11.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNYOSv774ejLUXukd5qDMKcDHUVQf//HprcGgYAoMkL+KF1ZDQAAAAASUVORK5CYII=',
    '/hero/image12.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPQSFuYOvPS3GPfr/7/z6CjJsHAKqairqdjYgkAnrUJxGm9WZoAAAAASUVORK5CYII=',
    '/hero/image13.jpg': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNwU5F+8/X/kXt/44ODGSY21U2bPE2GlU9dShoAqFkK5dD5mx8AAAAASUVORK5CYII=',
}