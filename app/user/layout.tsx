// =======================================================================
// FILE 1: /user/layout.tsx (The NEW Root Layout)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /user/layout.tsx file with this code.

"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/components_user/sidebar";
import Header from "@/components/components_user/header";

export default function UserLayout({ children }: { children: React.ReactNode; }) {
  // This state now controls if the sidebar is "pinned" open.
  const [isSidebarPinned, setIsSidebarPinned] = useState(true);

  // Effect to check screen size on initial load for a better default.
  useEffect(() => {
    // We only want this to run on the client side
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsSidebarPinned(false);
    }
  }, []);

  return (
    // Set a fixed height and prevent the body from scrolling
    <div className="relative flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* The Sidebar component now handles both desktop and mobile views internally */}
      <Sidebar isPinned={isSidebarPinned} setIsPinned={setIsSidebarPinned} />

      {/* Main Content Area */}
      {/* This container will now be the one that scrolls */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 min-w-0 overflow-y-auto 
                   lg:ml-20 ${isSidebarPinned ? "xl:ml-72" : ""}`}
      >
        {/* The header will now stick to the top of this scrolling container */}
        <Header />
        
        {/* Added padding at the bottom for the mobile pull-up menu */}
        <main className="flex-1 p-4 sm:p-6 pb-24 lg:pb-6">
          {children}
        </main>
      </div>
    </div>
  );
}
