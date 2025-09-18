// =======================================================================
// FILE: /admin/news-updates/page.tsx (The NEW Responsive Page)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/news-updates/page.tsx file with this code.

"use client";
import React from "react";
import { Input } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Assuming these are your custom components
import ModalAddNews from "@/components/components_admin/modalAddNews";
import ContentNewsAdmin from "@/components/components_admin/contentNewsAdmin";
import ContentNewsPublish from "@/components/components_admin/contentNewsPublish";

export default function NewsUpdatesPage() {
  return (
    // The banner is automatically handled by the parent admin/layout.tsx.
    // This section only contains the content specific to this page.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">News & Updates</h2>

      {/* Filters and Actions Bar */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="w-full md:flex-grow">
            <Input
              isClearable
              radius="lg"
              placeholder="Search by news title..."
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

          {/* Add News Button */}
          <div className="w-full md:w-auto flex justify-end">
              {/* Assuming ModalAddNews is triggered by a button */}
              <ModalAddNews />
          </div>
        </div>
      </div>

      {/* Main Content Area with Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Drafts Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
            <h3 className="text-xl font-bold text-gray-700 border-b pb-2">Drafts</h3>
            {/* This wrapper div makes ONLY the content scrollable if it gets too long */}
            <div className="overflow-y-auto h-[500px] pr-2">
                <ContentNewsAdmin />
            </div>
        </div>

        {/* Published Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
            <h3 className="text-xl font-bold text-gray-700 border-b pb-2">Published</h3>
            {/* This wrapper div makes ONLY the content scrollable if it gets too long */}
            <div className="overflow-y-auto h-[500px] pr-2">
                <ContentNewsPublish />
            </div>
        </div>

      </div>
    </section>
  );
}
