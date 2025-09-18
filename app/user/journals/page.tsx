// =======================================================================
// FILE: /user/journals/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your /user/journals/page.tsx file with this code.
// NOTE: For this to work correctly, you MUST DELETE the layout.tsx file from this
// same /user/journals/ directory.

"use client";
import React from "react";
import JournalsPage from "@/components/components_user/journalsPage";

export default function UserJournalsPage() {
  return (
    // The main application layout now handles the sidebar and header.
    // This page component only needs to render the specific content for the journals page.
    <JournalsPage />
  );
}
