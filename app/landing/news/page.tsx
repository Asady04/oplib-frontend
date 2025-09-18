// =======================================================================
// FILE: /app/landing/news/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your page.tsx file with this.
import { ContentNews } from "@/components/contentNews";
import { ContentLatestNews } from "@/components/contentLatestNews";

export default function NewsPage() {
  return (
    // The Navbar and Footer are now handled by the root layout.
    // This page only needs to render its specific content in a responsive grid.
    <section className="my-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ContentNews />
        </div>
        <div>
          <ContentLatestNews />
        </div>
      </div>
    </section>
  );
}