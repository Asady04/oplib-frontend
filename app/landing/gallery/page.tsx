// =======================================================================
// FILE: /app/landing/gallery/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your page.tsx file with this.
import { ContentGallery } from "@/components/contentGallery";

export default function GalleryPage() {
  return (
    // The Navbar and Footer are now handled by the root layout,
    // so this page only needs to render its specific content.
    <ContentGallery />
  );
}