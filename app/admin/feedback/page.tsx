// =======================================================================
// FILE: /admin/feedback/page.tsx (The NEW Responsive Page)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/feedback/page.tsx file with this code.

"use client";
import React from "react";
import { Select, SelectItem } from "@heroui/react";

// Assuming this is your custom component for the main content
import ContentFeedback from "@/components/components_admin/contentFeedback";

export default function FeedbackPage() {
  const library = [
    { key: "bdg", label: "Open Library TelU - Bandung" },
    { key: "jktA", label: "Open Library TelU - Jakarta A" },
    { key: "jktB", label: "Open Library TelU - Jakarta B" },
    { key: "srby", label: "Open Library TelU - Surabaya" },
  ];

  const role = [
    { key: "all", label: "All Users" },
    { key: "lecture", label: "Lecture" },
    { key: "student", label: "Student" },
  ];

  return (
    // The banner is now automatically handled by the parent admin/layout.tsx.
    // This section only contains the content specific to this page.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">User Feedback</h2>

      {/* Filters and Actions Bar */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Library Filter */}
          <Select
            labelPlacement="outside"
            placeholder="Filter by Library"
            className="w-full"
          >
            {library.map((lib) => (
              <SelectItem key={lib.key} value={lib.key}>{lib.label}</SelectItem>
            ))}
          </Select>

          {/* User Role Filter */}
          <Select
            labelPlacement="outside"
            placeholder="Filter by User"
            className="w-full"
          >
            {role.map((r) => (
              <SelectItem key={r.key} value={r.key}>{r.label}</SelectItem>
            ))}
          </Select>
        </div>
      </div>

      {/* Feedback Content */}
      <div className="bg-white rounded-lg shadow-lg p-4">
          {/* This wrapper div makes ONLY the content scrollable on small screens if it's too wide */}
          <div className="overflow-x-auto">
              {/* Your ContentFeedback component goes here. */}
              <ContentFeedback />
          </div>
      </div>
    </section>
  );
}
