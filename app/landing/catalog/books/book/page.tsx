// =======================================================================
// FILE: /app/landing/catalog/books/book/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your page.tsx file with this.
import { ContentBook } from "@/components/contentBook";

export default function BookDetailPage() {
  return (
    // The Navbar and Footer are now handled by the root layout.
    // This page only needs to render its specific content.
    <ContentBook />
  );
}