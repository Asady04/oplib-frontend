// =======================================================================
// FILE: /user/lecture-book-upload/add/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your page.tsx file with this code.
// NOTE: For this to work correctly, you MUST DELETE the layout.tsx file from this
// same /user/lecture-book-upload/add/ directory.

"use client";
import React from "react";
import LectureUploadJournal from "@/components/components_user/uploadLectureJournal";

export default function AddLectureBookPage() {
  return (
    // The main application layout now handles the sidebar and header.
    // This page component only needs to render the specific content for this page.
    <LectureUploadJournal />
  );
}
