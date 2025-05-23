"use client";

import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconHome,
  IconSitemap,
  IconBook2,
  IconBrandLinkedin
} from "@tabler/icons-react";


export function Dock() {

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `/`,
    },
    {
      title: "Projects",
      icon: (
        <IconSitemap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/project",
    },
    {
      title: "Poeta",
      icon: (
        <IconBook2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/poeta",
    },
    // {
    //     title: "LinkedIn",
    //     icon: (
    //       <IconBrandLinkedin  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //     ),
    //     href: "www.linkedin.com/in/ayuvify",
    //   },
    // {
    //   title: "Instagram",   
    //   icon: (
    //     <IconBrandInstagram  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "https://www.instagram.com/ayuvify/",
    // },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/maybeadev",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500" />
      ),
      href: "https://github.com/ayuvify",
    },
  ];

  return (
    <div className="flex items-center fixed justify-center bottom-5 left-0 right-0 h-16 w-full bg-nerutal-800">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
