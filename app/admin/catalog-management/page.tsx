// =======================================================================
// FILE: /admin/catalog-management/page.tsx (With fix for the Image error)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/catalog-management/page.tsx file with this code.
// Then, apply the pattern from the new "ExampleContentCatalogs" component to your actual "ContentCatalogs.tsx" file.

"use client";
import React, { useState } from "react";
import { Select, SelectItem, Input, Button, Tabs, Tab } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBook, faJournalWhills, faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"; // Make sure Image is imported

// Assuming these are your custom components
import ModalAddCatalog from "@/components/components_admin/modalAddCatalog";
// import ContentCatalogs from "@/components/components_admin/contentCatalogs";

// =======================================================================
// THIS IS AN EXAMPLE COMPONENT TO SHOW YOU HOW TO FIX THE ERROR
// =======================================================================
const ExampleContentCatalogs = () => {
    // This is placeholder data. Your component will fetch real data.
    const items = [
        { id: 1, title: "The Principles of Power", coverUrl: "/assets/image/cover buku.svg" },
        { id: 2, title: "Another Book", coverUrl: "/assets/image/cover buku.svg" },
    ];

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cover</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        {/* Add other headers here */}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {/* THE FIX IS HERE: 
                                    The <Image> component now has width and height props.
                                    This is required by Next.js for local images to prevent layout shift.
                                */}
                                <Image
                                    src={item.coverUrl}
                                    alt={`Cover of ${item.title}`}
                                    width={40}  // Example width, adjust as needed
                                    height={60} // Example height, adjust as needed
                                    className="rounded object-cover"
                                />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                            </td>
                            {/* Add other data cells here */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
// =======================================================================
// END OF EXAMPLE - APPLY THIS PATTERN TO YOUR ACTUAL COMPONENT
// =======================================================================


export default function CatalogManagementPage() {
  const [activeTab, setActiveTab] = useState("all");

  const renderContent = () => {
    switch (activeTab) {
      case "books":
        // return <ContentBooks />;
        return <ExampleContentCatalogs />; // Using the example component
      case "journals":
        // return <ContentJournals />;
        return <ExampleContentCatalogs />; // Using the example component
      case "all":
      default:
        // This is where your actual component would go.
        // return <ContentCatalogs />;
        return <ExampleContentCatalogs />; // Using the example component
    }
  };

  return (
    // The banner is automatically handled by the parent admin/layout.tsx.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Catalog Management</h2>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FontAwesomeIcon icon={faSwatchbook} className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Total Catalogs</p>
            <p className="text-2xl font-bold text-gray-800">21,789</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FontAwesomeIcon icon={faJournalWhills} className="w-8 h-8 text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Journals</p>
            <p className="text-2xl font-bold text-gray-800">11,589</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
          <FontAwesomeIcon icon={faBook} className="w-8 h-8 text-purple-500" />
          <div>
            <p className="text-sm text-gray-500">Books</p>
            <p className="text-2xl font-bold text-gray-800">10,200</p>
          </div>
        </div>
      </div>

      {/* Filters and Actions Bar */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:flex-grow">
                <Input
                    isClearable
                    radius="lg"
                    placeholder="Search by title or author..."
                    startContent={<FontAwesomeIcon icon={faSearch} className="text-gray-400" />}
                    classNames={{ inputWrapper: "bg-gray-100 hover:bg-gray-200" }}
                />
            </div>
            <div className="w-full md:w-auto">
                <ModalAddCatalog />
            </div>
        </div>
      </div>

      {/* Tab Navigation and Content */}
      <div className="bg-white rounded-lg shadow-lg p-5">
        <Tabs 
          aria-label="Catalog types" 
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key as string)}
          classNames={{
            tabList: "bg-gray-100 rounded-t-lg p-2",
            tab: "px-4 py-2 text-sm font-medium",
            cursor: "bg-white shadow-md rounded-md",
            tabContent: "group-data-[selected=true]:text-blue-600"
          }}
        >
          <Tab key="all" title="All Catalogs" />
          <Tab key="books" title="Books" />
          <Tab key="journals" title="Journals" />
        </Tabs>
        <div className="mt-3">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
