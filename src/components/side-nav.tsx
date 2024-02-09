'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS, SOCIAL_LINKS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react/dist/iconify.js';

const SideNav = () => {
  return (
    <div className="md:w-16 bg-white h-screen flex-1 flex-col justify-between fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <div className="flex flex-col">
          {/* LOGO */}
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
          >
            <span className="font-bold text-xl hidden md:flex">B</span>
          </Link>

          {/* MENU */}
          <div className="flex flex-col space-y-2 px-1 ">
            {SIDENAV_ITEMS.map((item, idx) => {
              return <MenuItem key={idx} item={item} />;
            })}

          </div>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="flex flex-row flex-wrap-reverse items-center md:justify-start md:px-1 border-b border-zinc-200 h-12 w-full">
        {SOCIAL_LINKS.map((item, idx) => {
          return <MenuItem key={idx} item={item} blank={true} />;
        })}
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item, blank=false }: { item: SideNavItem, blank?: boolean }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-4 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="15" height="15" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-5 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    <span>{subItem.icon}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          target={blank ? '_blank' : '_self'}
          className={`flex flex-row space-x-4 items-center p-4 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
        >
          {item.icon}
        </Link>
      )}
    </div>
  );
};