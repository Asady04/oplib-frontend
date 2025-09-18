// =======================================================================
// FILE: /user/lecture-book-upload/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your page.tsx file with this code.
// NOTE: For this to work correctly, you MUST DELETE the layout.tsx file from this
// same /user/lecture-book-upload/ directory.

"use client";
import React from "react";
import LectureBook from "@/components/components_user/lectureBook";

export default function LectureBookUploadPage() {
  return (
    // The main application layout now handles the sidebar and header.
    // This page component only needs to render the specific content for this page.
    <LectureBook />
  );
}
