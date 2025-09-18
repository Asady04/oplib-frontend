// =======================================================================
// FILE: /user/books/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your /user/books/page.tsx file with this code.
// NOTE: For this to work correctly, you MUST DELETE the layout.tsx file from this
// same /user/books/ directory.

"use client";
import React from "react";
import BooksPage from "@/components/components_user/booksPage";

export default function UserBooksPage() {
  return (
    // The main application layout now handles the sidebar and header.
    // This page component only needs to render the specific content for the books catalog.
    <BooksPage />
  );
}
