// =======================================================================
// FILE: /admin/operational-schedule/page.tsx (The NEW Responsive Page)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/operational-schedule/page.tsx file with this code.

"use client";
import React from "react";
import { Select, SelectItem } from "@heroui/react";

// Assuming these are your custom components
import ModalAddHours from "@/components/components_admin/modalAddOperatingHours";
import ContentOperatingHours from "@/components/components_admin/contentOperatingHours";

export default function OperationalSchedulePage() {
  const library = [
    { key: "bdg", label: "Open Library TelU - Bandung" },
    { key: "jktA", label: "Open Library TelU - Jakarta A" },
    { key: "jktB", label: "Open Library TelU - Jakarta B" },
    { key: "srby", label: "Open Library TelU - Surabaya" },
  ];

  return (
    // The banner is now automatically handled by the parent admin/layout.tsx.
    // This section only contains the content specific to this page.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Operational Schedule</h2>

      {/* Filters and Actions Bar */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {/* THE FIX IS HERE: This is now a flex-row on all screen sizes */}
        <div className="flex flex-row gap-4 items-center justify-between">
          {/* Library Filter Dropdown */}
          <div className="flex-grow">
            <Select
              labelPlacement="outside"
              placeholder="Select a library"
              className="w-full"
            >
              {library.map((lib) => (
                <SelectItem key={lib.key} value={lib.key}>{lib.label}</SelectItem>
              ))}
            </Select>
          </div>

          {/* Add Hours Button */}
          <div className="flex-shrink-0">
              {/* Assuming ModalAddHours is triggered by a button */}
              <ModalAddHours />
          </div>
        </div>
      </div>

      {/* Operating Hours Table/Content */}
      <div className="bg-white rounded-lg shadow-lg p-4">
          {/* This wrapper div makes ONLY the table scrollable on small screens */}
          <div className="overflow-x-auto">
              {/* IMPORTANT: For this to work, the table element inside your 
                ContentOperatingHours component should have a class of `min-w-full`.
                Example: <table className="min-w-full ...">
              */}
              <ContentOperatingHours />
          </div>
      </div>
    </section>
  );
}
