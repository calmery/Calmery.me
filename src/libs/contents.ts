import type { ComponentPropsWithoutRef } from "react";
import PhotoGallery from "react-photo-gallery";
import { Icon, type IconProps } from "../components/Icon";

// Types

interface ContentHeading {
  icon: IconProps["icon"];
  text: string;
}

export interface MainContent {
  contents: React.ComponentProps<typeof PhotoGallery>["photos"];
  heading: ContentHeading;
  type: "gallery";
}

export type SidebarContent =
  | {
      contents: {
        description: string;
        icon: ComponentPropsWithoutRef<typeof Icon>["icon"];
      }[];
      direction: "column" | "row";
      heading: ContentHeading;
      type: "emojis";
    }
  | {
      contents: {
        href: string;
        icon: ComponentPropsWithoutRef<typeof Icon>["icon"];
        children: string;
      }[];
      direction: "column" | "row";
      heading: ContentHeading;
      type: "links";
    };

// Contents

export const mainContents: MainContent[] = [
  {
    contents: [
      { alt: "Cafe", height: 640, src: `/photos/cafe/0.webp`, width: 1024 },
      { alt: "Cafe", height: 576, src: `/photos/cafe/1.webp`, width: 1024 },
      { alt: "Cafe", height: 576, src: `/photos/cafe/2.webp`, width: 1024 },
      { alt: "Cafe", height: 675, src: `/photos/cafe/3.webp`, width: 1024 },
      { alt: "Cafe", height: 768, src: `/photos/cafe/4.webp`, width: 1024 },
    ],
    heading: {
      icon: "hash",
      text: "Cafe",
    },
    type: "gallery",
  },
];

export const sidebarContents: SidebarContent[] = [
  {
    contents: [
      {
        description: "プログラミング",
        icon: "laptop",
      },
      {
        description: "写真撮影",
        icon: "camera",
      },
      {
        description: "ゲーム",
        icon: "game",
      },
      {
        description: "紅茶",
        icon: "coffee",
      },
      {
        description: "甘いもの",
        icon: "doughnut",
      },
    ],
    direction: "row",
    heading: {
      icon: "sparkling_heart",
      text: "好きなもの",
    },
    type: "emojis",
  },
  {
    contents: [
      {
        children: "Notion",
        href: "https://bit.ly/c41m3ry",
        icon: "notion",
      },
    ],
    direction: "column",
    heading: {
      icon: "link",
      text: "プロフィール",
    },
    type: "links",
  },
  {
    contents: [
      {
        children: "Twitter",
        href: "https://twitter.com/calmeryme",
        icon: "twitter",
      },
      {
        children: "GitHub",
        href: "https://github.com/calmery",
        icon: "github",
      },
      {
        children: "Instagram",
        href: "https://instagr.am/c41m3ry",
        icon: "instagram",
      },
    ],
    direction: "column",
    heading: {
      icon: "link",
      text: "SNS",
    },
    type: "links",
  },
  {
    contents: [
      {
        children: "Calmery.moe",
        href: "https://calmery.moe",
        icon: "sparkling_heart",
      },
      {
        children: "かるめりちゃんカメラ",
        href: "https://camera.calmery.moe",
        icon: "camera",
      },
      {
        children: "めたねのあーと",
        href: "https://metaneno.art",
        icon: "palette",
      },
    ],
    direction: "column",
    heading: {
      icon: "link",
      text: "作ったもの",
    },
    type: "links",
  },
  {
    contents: [
      {
        children: "Qiita",
        href: "https://qiita.com/calmery",
        icon: "link",
      },
      {
        children: "はてなブログ",
        href: "https://calmery.hatenablog.com",
        icon: "link",
      },
    ],
    direction: "column",
    heading: {
      icon: "link",
      text: "その他",
    },
    type: "links",
  },
];