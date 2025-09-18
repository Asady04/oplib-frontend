// =======================================================================
// FILE 3: /components/components_user/header.tsx (NEW COMPONENT)
// =======================================================================
// INSTRUCTIONS: Create or replace this file at the specified path.

"use client";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@heroui/input";
import { SearchIcon } from "@/components/icons";
import {
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@heroui/react";
import ModalSearch from "../modalSearch";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="flex justify-between items-center p-4">
            <div className="flex items-center gap-4">
                <NextLink href="/user">
                    <Image src="/assets/logo/logo_oplib.svg" alt="Open Library Logo" width={40} height={40} />
                </NextLink>
                <div className="hidden sm:flex">
                    <Input
                        isClearable
                        radius="lg"
                        placeholder="Type to search books..."
                        startContent={<SearchIcon className="text-gray-400" />}
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="sm:hidden">
                    <ModalSearch />
                </div>
                <Popover placement="bottom-end">
                    <PopoverTrigger>
                        <Button isIconOnly className="bg-red-600 text-white">
                        <FontAwesomeIcon icon={faCreditCard} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="px-2 py-2">
                        <div className="text-sm font-bold">Total Charge:</div>
                        <div className="text-xs">Rp.200.000</div>
                        </div>
                    </PopoverContent>
                </Popover>
                <div className="text-right hidden md:block">
                    <p className="font-semibold text-sm">Nama Orang</p>
                    <p className="text-xs text-gray-500">1234567890</p>
                </div>
                <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                />
            </div>
        </div>
    </header>
  );
}