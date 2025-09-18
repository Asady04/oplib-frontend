// =======================================================================
// FILE: /components/navbar.tsx (Updated)
// =======================================================================
// FIXES: The mobile menu now correctly displays the main navigation links
// to match the desktop view.
// =======================================================================
'use client'
import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { SearchIcon } from "@/components/icons";
import ModalLogin from "./modalLogin";
import ModalSearch from "./modalSearch";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-white shadow-md">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <img src="/assets/logo/logo_oplib.svg" alt="Open Library Logo" className="h-9 w-9" />
            <p className="font-bold text-inherit">Open Library</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className="data-[active=true]:text-primary data-[active=true]:font-medium text-dark-red font-semibold"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex max-w-xs">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <ModalSearch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <ModalLogin />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* --- Updated Mobile Menu --- */}
      <NavbarMenu>
        <div className="flex justify-between space-x-2">
            {searchInput}
            <ModalSearch />
        </div>
        <div className="mx-4 mt-4 flex flex-col gap-4">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <NextLink
                href={item.href}
                className="w-full text-lg text-gray-700 hover:text-dark-red transition-colors font-semibold"
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
           <NavbarMenuItem className="mt-4">
             <ModalLogin />
           </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
