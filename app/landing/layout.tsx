// =======================================================================
// STEP 1: Create this new file at /app/(landing)/layout.tsx
// =======================================================================
// This will be the layout for your public-facing pages.
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}