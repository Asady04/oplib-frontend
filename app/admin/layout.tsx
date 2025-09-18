// =======================================================================
// FILE 1: /admin/layout.tsx (The NEW Shared Layout)
// =======================================================================
// INSTRUCTIONS: Place this code in your main /admin/layout.tsx file.
// This will provide the sidebar and the banner for ALL pages inside /admin.

"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

// Assuming these are your custom components
import { Sidebar } from "@/components/components_admin/sidebar";
import HeaderAdmin from "@/components/components_admin/headerAdmin";

// Placeholder for the user avatar to avoid importing a component that causes duplication
const UserAvatar = () => (
  <div className="flex items-center gap-3">
    <span className="font-bold text-sm hidden sm:inline">Admin</span>
    <img
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop"
      alt="Admin Avatar"
      className="w-10 h-10 rounded-full border-2 border-white/80"
      onError={(e) => {
        e.currentTarget.src = "https://placehold.co/40x40/E2E8F0/4A5568?text=A";
      }}
    />
  </div>
);

const SharedAdminBanner = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Select Telkom University Library"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <div className="relative bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full text-white p-4 sm:p-6 md:p-8 shadow-md">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 space-y-8">
        {/* Top Row: Welcome Message and User Info */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Good morning, Aliza Nurfitrian
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-200">
              Here's what's happening at Open Library Telkom University today!
            </p>
          </div>

          {/* User Info Section */}
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-x-4 gap-y-2 bg-white/20 backdrop-blur-sm p-2 rounded-lg w-full md:w-auto">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>Today, 24th March</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <FontAwesomeIcon icon={faClock} />
              <span>08:00 - 16:00</span>
            </div>
            {/* Using the local UserAvatar component to prevent duplication */}
            <UserAvatar />
          </div>
        </div>

        {/* Dropdown for library selection */}
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize bg-white shadow-md text-black text-sm font-semibold px-4 py-2"
              >
                {selectedValue}{" "}
                <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={() => setSelectedKeys}
            >
              <DropdownItem key="Open Library - Bandung">
                Open Library - Bandung
              </DropdownItem>
              <DropdownItem key="Open Library - Jakarta A">
                Open Library - Jakarta A
              </DropdownItem>
              <DropdownItem key="Open Library - Jakarta B">
                Open Library - Jakarta B
              </DropdownItem>
              <DropdownItem key="Open Library - Surabaya">
                Open Library - Surabaya
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen bg-gray-100 font-sans">
      <div className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-20 flex-col bg-white shadow-lg">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col lg:pl-20 pb-20 lg:pb-0">
        <SharedAdminBanner />
        <main className="flex-grow">{children}</main>
      </div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 h-16 bg-white shadow-[0_-2px_5px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-around w-full h-full px-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
