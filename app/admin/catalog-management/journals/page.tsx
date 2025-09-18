// =======================================================================
// FILE: /admin/catalog-management/journals/page.tsx (The NEW Responsive Page)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/catalog-management/journals/page.tsx file with this code.

"use client";
import React from "react";
import { Input } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Assuming these are your custom components
import ModalAddJournal from "@/components/components_admin/modalAddJournal"; // You might need to create this
import ContentCatalogJournals from "@/components/components_admin/contentJournals";

export default function JournalsPage() {
  return (
    // The banner is now automatically handled by the parent admin/layout.tsx.
    // This section only contains the content specific to the Journals page.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Journals Catalog</h2>

      {/* Filters and Actions Bar */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="w-full md:flex-grow">
            <Input
              isClearable
              radius="lg"
              placeholder="Search by journal title, publisher, or ISSN..."
              startContent={
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-400"
                />
              }
              classNames={{
                  inputWrapper: "bg-gray-100 hover:bg-gray-200",
              }}
            />
          </div>

          {/* Add Journal Button */}
          <div className="w-full md:w-auto flex justify-end">
              {/* Assuming ModalAddJournal is the trigger for adding a new journal */}
              <ModalAddJournal />
          </div>
        </div>
      </div>

      {/* Journals Table/Content */}
      <div className="bg-white rounded-lg shadow-lg p-4">
          {/* This wrapper div makes ONLY the table scrollable on small screens */}
          <div className="overflow-x-auto">
              {/* IMPORTANT: For this to work, the table element inside your 
                ContentCatalogJournals component should have a class of `min-w-full`.
                Example: <table className="min-w-full ...">
              */}
              <ContentCatalogJournals />
          </div>
      </div>
    </section>
  );
}
