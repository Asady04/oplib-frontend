// =======================================================================
// FILE: /user/journal-upload/add/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your page.tsx file with this code.
// NOTE: For this to work correctly, you MUST DELETE the layout.tsx file from this
// same /user/journal-upload/add/ directory.

"use client";
import React from "react";
import UploadJournal from "@/components/components_user/uploadJournal";

export default function AddJournalPage() {
  return (
    // The main application layout now handles the sidebar and header.
    // This page component only needs to render the specific content for this page.
    <UploadJournal />
  );
}
