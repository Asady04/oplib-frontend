// =======================================================================
// FILE: /app/landing/catalog/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your page.tsx file with this.
import { ContentCatalog } from "@/components/contentCatalog";

export default function CatalogPage() {
  return (
    // The Navbar and Footer are now handled by the root layout,
    // so this page only needs to render its specific content.
    <ContentCatalog />
  );
}