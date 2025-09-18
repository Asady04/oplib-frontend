// =======================================================================
// FILE: /user/book/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your /user/book/page.tsx file with this code.
// NOTE: For this to work correctly, please DELETE the layout.tsx file from this 
// same /user/book/ directory. This will allow the main application layout 
// (from /user/layout.tsx) to apply correctly.

"use client";
import React from "react";
import ContentCatalogBook from "@/components/components_user/bookContent";

export default function BookCatalogPage() {
  return (
    // The main layout, header, and sidebar are now handled by the root layout.
    // This page component only needs to provide the specific content for the book catalog.
    // The <main> tag with padding is already in your root layout.
    <ContentCatalogBook />
  );
}
