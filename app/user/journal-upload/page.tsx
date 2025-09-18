// =======================================================================
// FILE: /user/journal-upload/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your /user/journal-upload/page.tsx file with this code.
// NOTE: For this to work correctly, you MUST DELETE the layout.tsx file from this
// same /user/journal-upload/ directory.

"use client";
import React from "react";
import UserJournal from "@/components/components_user/userJournal";

export default function UserJournalUploadPage() {
  return (
    // The main application layout now handles the sidebar and header.
    // This page component only needs to render the specific content for the journal upload page.
    <UserJournal />
  );
}
