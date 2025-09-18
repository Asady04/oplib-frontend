// =======================================================================
// FILE: /admin/infografis-management/page.tsx (The NEW Responsive Page)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/infografis-management/page.tsx file with this code.

"use client";
import React from "react";

// Assuming these are your custom components
import ContentInfografis from "@/components/components_admin/contentInfografis";
import ModalAddInfografis from "@/components/components_admin/modalAddInfografis";

export default function InfografisManagementPage() {
  return (
    // The banner is automatically handled by the parent admin/layout.tsx.
    // This section only contains the content specific to this page.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      {/* Page Header: Title and Action Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Infografis Management</h2>
        </div>
        
        {/* Assuming ModalAddInfografis is the upload button/modal trigger */}
        <ModalAddInfografis />
      </div>

      {/* Infographics Content Area */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          {/* Your ContentInfografis component goes here.
              For best results, it should render a responsive grid, for example:
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                ... your infographic cards ...
              </div>
          */}
          <ContentInfografis />
      </div>
    </section>
  );
}
