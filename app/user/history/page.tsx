// =======================================================================
// FILE: /user/history/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your /user/history/page.tsx file with this code.
// NOTE: For this to work correctly, you MUST DELETE the layout.tsx file from this
// same /user/history/ directory.

"use client";
import React from "react";
import HistoryPage from "@/components/components_user/history";

export default function UserHistoryPage() {
  return (
    // The main application layout now handles the sidebar and header.
    // This page component only needs to render the specific content for the history page.
    <HistoryPage />
  );
}
