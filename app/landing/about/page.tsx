// =======================================================================
// FILE: /app/landing/about/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your page.tsx file with this.
import { ContentAbout } from "@/components/contentAbout";

export default function AboutPage() {
  return (
    // The Navbar and Footer are now handled by the root layout,
    // so this page only needs to render its specific content.
    <ContentAbout />
  );
}