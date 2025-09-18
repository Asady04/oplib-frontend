// =======================================================================
// FILE: /app/page.tsx (Updated & Simplified)
// =======================================================================
import { ContentBeranda } from "@/components/contentBeranda";

export default function Home() {
  return (
    // This page no longer needs the Navbar or Footer, as they are in the layout.
    // It only needs to render its specific content.
    <ContentBeranda />
  );
}
