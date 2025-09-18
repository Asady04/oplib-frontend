// =======================================================================
// FILE: /admin/catalog-management/books/book/page.tsx (The NEW Responsive Page)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/catalog-management/books/book/page.tsx file with this code.

"use client";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Assuming this is your custom component for the main content
import ContentCatalogBook from "@/components/components_admin/contentBook";

// Placeholder data for a single book - you would fetch this data dynamically
const bookData = {
  title: "The Principles of Power",
  author: "Dion Yulianto",
  publisher: "Gramedia Pustaka Utama",
  year: "2023",
  isbn: "978-602-06-3317-6",
  category: "Self-improvement",
  status: "Available",
  location: "Rak A3-05",
  copies: 5,
  synopsis: "The Principles of Power is a book that reveals the secrets behind achieving success and influence in various aspects of life. Through in-depth analysis and practical examples, Dion Yulianto breaks down the key principles that can help readers understand, build, and use their power wisely. This book is not just about dominating others, but about how to have a positive impact and achieve personal and professional goals.",
  coverUrl: "/assets/image/cover buku.svg", // The image that caused the previous error
};


export default function BookDetailPage() {
  return (
    // The banner is automatically handled by the parent admin/layout.tsx.
    // This section only contains the content specific to the book detail page.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      
      {/* Back Navigation and Page Title */}
      <div className="flex items-center gap-4">
        <NextLink href="/admin/catalog-management/books" passHref>
          <Button isIconOnly variant="light" aria-label="Back to books list">
            <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 text-gray-600" />
          </Button>
        </NextLink>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Book Details</h2>
      </div>

      {/* Main Content Area */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Book Cover */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-72 md:w-full md:h-auto md:max-h-[400px]">
              <Image
                src={bookData.coverUrl}
                alt={`Cover of ${bookData.title}`}
                width={400} // Added required width
                height={600} // Added required height
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column: Book Information */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Title and Author */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{bookData.title}</h1>
              <p className="text-lg text-gray-600 mt-1">by {bookData.author}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button color="primary" startContent={<FontAwesomeIcon icon={faPencilAlt} />}>
                Edit Book
              </Button>
              <Button color="danger" variant="ghost" startContent={<FontAwesomeIcon icon={faTrash} />}>
                Delete
              </Button>
            </div>

            {/* Details Table */}
            <div className="border-t pt-4">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <dt className="font-medium text-gray-500">Publisher</dt>
                <dd className="text-gray-800">{bookData.publisher}</dd>

                <dt className="font-medium text-gray-500">Year</dt>
                <dd className="text-gray-800">{bookData.year}</dd>

                <dt className="font-medium text-gray-500">ISBN</dt>
                <dd className="text-gray-800">{bookData.isbn}</dd>

                <dt className="font-medium text-gray-500">Category</dt>
                <dd className="text-gray-800">{bookData.category}</dd>

                <dt className="font-medium text-gray-500">Status</dt>
                <dd>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    bookData.status === "Available" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {bookData.status}
                  </span>
                </dd>

                <dt className="font-medium text-gray-500">Location</dt>
                <dd className="text-gray-800">{bookData.location}</dd>

                <dt className="font-medium text-gray-500">Copies</dt>
                <dd className="text-gray-800">{bookData.copies}</dd>
              </dl>
            </div>

            {/* Synopsis */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">Synopsis</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{bookData.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
