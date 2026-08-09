import { siteInfo } from "@/config/info";

export const siteConfig = {
  name: siteInfo.name,
  description: siteInfo.description,
  wordpressUrl: siteInfo.websiteUrl,
  contact: siteInfo.contact,
} as const;

export const mainNavigation = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/san-pham", label: "Danh mục đầu tư" },
  { href: "/tin-tuc", label: "Tin tức" },
] as const;
