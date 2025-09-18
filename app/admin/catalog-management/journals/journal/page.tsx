// =======================================================================
// FILE: /admin/catalog-management/journals/journal/page.tsx (The NEW Responsive Page)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/catalog-management/journals/journal/page.tsx file with this code.

"use client";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Placeholder data for a single journal - you would fetch this data dynamically
const journalData = {
  title: "Analysis of User Interface Design on Mobile Application User Satisfaction",
  author: "Dr. Annisa W.",
  publisher: "IEEE Xplore",
  publicationDate: "March 2024",
  issn: "2324-549X",
  category: "Human-Computer Interaction",
  status: "Available Online",
  doi: "10.1109/ACCESS.2024.123456",
  abstract: "This study analyzes the impact of user interface (UI) design on user satisfaction in mobile applications. By evaluating several popular applications through user surveys and heuristic evaluation, this paper identifies key UI elements that significantly contribute to a positive user experience. The findings suggest that intuitive navigation, clean aesthetics, and responsive feedback are critical for high user satisfaction ratings. The results provide valuable guidelines for developers and designers aiming to create more engaging and user-friendly mobile applications.",
  coverUrl: "/assets/image/cover buku.svg", // Placeholder - replace with actual journal cover if available
};


export default function JournalDetailPage() {
  return (
    // The banner is automatically handled by the parent admin/layout.tsx.
    // This section only contains the content specific to the journal detail page.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      
      {/* Back Navigation and Page Title */}
      <div className="flex items-center gap-4">
        <NextLink href="/admin/catalog-management/journals" passHref>
          <Button isIconOnly variant="light" aria-label="Back to journals list">
            <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 text-gray-600" />
          </Button>
        </NextLink>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Journal Details</h2>
      </div>

      {/* Main Content Area */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Journal Cover */}
          <div className="md:col-span-1 flex justify-center">
            {/* THE FIX IS HERE: The parent div now defines the aspect ratio, and the Image uses the "fill" prop. */}
            <div className="relative w-48 aspect-[2/3] md:w-full md:max-w-xs">
              <Image
                src={journalData.coverUrl}
                alt={`Cover of ${journalData.title}`}
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          {/* Right Column: Journal Information */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Title and Author */}
            <div>
              <p className="text-sm font-semibold text-blue-600">{journalData.category}</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">{journalData.title}</h1>
              <p className="text-lg text-gray-600 mt-1">by {journalData.author}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button color="primary" startContent={<FontAwesomeIcon icon={faPencilAlt} />}>
                Edit Journal
              </Button>
              <Button color="danger" variant="ghost" startContent={<FontAwesomeIcon icon={faTrash} />}>
                Delete
              </Button>
            </div>

            {/* Details Table */}
            <div className="border-t pt-4">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <dt className="font-medium text-gray-500">Publisher</dt>
                <dd className="text-gray-800">{journalData.publisher}</dd>

                <dt className="font-medium text-gray-500">Publication Date</dt>
                <dd className="text-gray-800">{journalData.publicationDate}</dd>

                <dt className="font-medium text-gray-500">ISSN</dt>
                <dd className="text-gray-800">{journalData.issn}</dd>

                <dt className="font-medium text-gray-500">DOI</dt>
                <dd className="text-gray-800">{journalData.doi}</dd>

                <dt className="font-medium text-gray-500">Status</dt>
                <dd>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    journalData.status === "Available Online" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-gray-100 text-gray-800"
                  }`}>
                    {journalData.status}
                  </span>
                </dd>
              </dl>
            </div>

            {/* Abstract */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">Abstract</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{journalData.abstract}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
