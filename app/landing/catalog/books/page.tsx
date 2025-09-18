// =======================================================================
// FILE: /app/landing/catalog/books/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your page.tsx file with this.
import { ContentBooks } from "@/components/contentBooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function BooksPage() {
  return (
    // The Navbar and Footer are now handled by the root layout.
    <section className="my-8">
      <h1 className="flex items-center text-maroon text-3xl font-bold gap-3 mb-6">
        <FontAwesomeIcon icon={faBook} className="w-[27px]" />
        Books
      </h1>
      <ContentBooks />
    </section>
  );
}