export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Open Library - Telkom University",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "About Us",
      href: "/landing/about",
    },
    {
      label: "Gallery",
      href: "/landing/gallery",
    },
    {
      label: "Catalog",
      href: "/landing/catalog",
    },
    // {
    //   label: "About",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: "Beranda",
      href: "/profile",
    },
    {
      label: "About Us",
      href: "/dashboard",
    },
    {
      label: "Gallery",
      href: "/projects",
    },
    {
      label: "Catalog",
      href: "/team",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
