// =======================================================================
// FILE: /admin/catalog-management/books/page.tsx (The NEW Responsive Page)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/catalog-management/books/page.tsx file with this code.

"use client";
import React from "react";
import { Select, SelectItem, Input } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Assuming these are your custom components
import ModalAddBook from "@/components/components_admin/modalAddCatalog"; // You might need to create this
import ContentCatalogBooks from "@/components/components_admin/contentBooks";

export default function BooksPage() {
  const availability = [
    { key: "all", label: "All Status" },
    { key: "available", label: "Available" },
    { key: "borrowed", label: "Borrowed" },
  ];

  const category = [
    { key: "all", label: "All Categories" },
    { key: "fiction", label: "Fiction" },
    { key: "non-fiction", label: "Non-Fiction" },
    { key: "science", label: "Science" },
    { key: "history", label: "History" },
  ];

  return (
    // The banner is now automatically handled by the parent admin/layout.tsx.
    // This section only contains the content specific to the Books page.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Books Catalog</h2>

      {/* Filters and Actions Bar */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Search Input */}
          <div className="lg:col-span-2">
            <Input
              isClearable
              radius="lg"
              placeholder="Search by book title, author, or ISBN..."
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

          {/* Category Filter */}
          <Select
            labelPlacement="outside"
            placeholder="Filter by Category"
            className="w-full"
          >
            {category.map((cat) => (
              <SelectItem key={cat.key} value={cat.key}>{cat.label}</SelectItem>
            ))}
          </Select>

          {/* Availability Filter */}
          <Select
            labelPlacement="outside"
            placeholder="Filter by Status"
            className="w-full"
          >
            {availability.map((avail) => (
              <SelectItem key={avail.key} value={avail.key}>{avail.label}</SelectItem>
            ))}
          </Select>

        </div>
        <div className="mt-4 flex justify-end">
            {/* Assuming ModalAddBook is the trigger for adding a new book */}
            <ModalAddBook />
        </div>
      </div>

      {/* Books Table/Content */}
      <div className="bg-white rounded-lg shadow-lg p-4">
          {/* This wrapper div makes ONLY the table scrollable on small screens */}
          <div className="overflow-x-auto">
              {/* IMPORTANT: For this to work, the table element inside your 
                ContentCatalogBooks component should have a class of `min-w-full`.
                Example: <table className="min-w-full ...">
              */}
              <ContentCatalogBooks />
          </div>
      </div>
    </section>
  );
}
