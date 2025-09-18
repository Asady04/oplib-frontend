// =======================================================================
// FILE 3: /user/page.tsx (The SIMPLIFIED Page)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /user/page.tsx file with this code.

"use client";
import React from "react";
// Assuming these are your user-facing components
import LectureHeader from "@/components/components_user/header";
import { LectureHome } from "@/components/components_user/homePage";

export default function HomeLecture() {
  return (
    // This page only needs to render its specific content with its own padding.
    // The main layout handles the sidebar and responsive margins.
    <div className="">
        <LectureHome />
    </div>
  );
}
