// =======================================================================
// FILE: /app/landing/catalog/journals/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your page.tsx file with this.
import { ContentJournals } from "@/components/contentJournals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookJournalWhills } from "@fortawesome/free-solid-svg-icons";

export default function JournalsPage() {
  return (
    // The Navbar and Footer are now handled by the root layout.
    <section className="my-8">
      <h1 className="flex items-center text-maroon text-3xl font-bold gap-3 mb-6">
        <FontAwesomeIcon icon={faBookJournalWhills} className="w-[29px]" />
        Journals
      </h1>
      <ContentJournals />
    </section>
  );
}