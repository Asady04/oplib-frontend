// =======================================================================
// FILE: /components/contentBooks.tsx
// =======================================================================
import React from "react";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTags,
  faBullhorn,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";

// Helper Components for contentBooks.tsx
const BookResultCard = ({ title, author, publisher, classification, category, keywords, imageUrl, href }: {
    title: string;
    author: string;
    publisher: string;
    classification: string;
    category: string;
    keywords: string;
    imageUrl: string;
    href: string;
}) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row transform hover:-translate-y-1 transition-transform duration-300">
        <div className="flex-shrink-0 sm:w-1/4 md:w-1/5 flex items-center justify-center p-4 bg-gray-100">
            <img src={imageUrl} alt={title} className="h-48 object-contain rounded-md" />
        </div>
        <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
                <NextLink href={href} className="text-lg font-bold text-gray-800 hover:text-dark-red transition-colors">
                    {title}
                </NextLink>
                <p className="flex items-center text-sm text-gray-600 mt-2 gap-2">
                    <FontAwesomeIcon icon={faUser} className="w-4" />
                    {author}
                </p>
                <p className="flex items-center text-sm text-gray-600 mt-2 gap-2">
                    <FontAwesomeIcon icon={faBullhorn} className="w-4" />
                    {publisher}
                </p>
                <p className="flex items-center text-sm text-gray-600 mt-2 gap-2">
                    <FontAwesomeIcon icon={faTags} className="w-4" />
                    {classification}
                </p>
                <p className="flex items-center text-sm text-gray-600 mt-2 gap-2">
                    <FontAwesomeIcon icon={faBookBookmark} className="w-4" />
                    {category}
                </p>
            </div>
            <p className="text-xs italic text-gray-500 mt-4">{keywords}</p>
        </div>
    </div>
);

const bookData = {
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN...",
    author: "DIVAZANNA ILLARITZQI",
    publisher: "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification: "658 - General management, General business management...",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    keywords: "Procurement",
};

export const ContentBooks = () => (
    <div className="space-y-6 my-8">
        {Array(8).fill(0).map((_, index) => (
            <BookResultCard 
                key={index}
                {...bookData}
                imageUrl={index % 2 === 0 ? "/assets/image/cover buku.svg" : "/assets/image/cover buku2.svg"}
                href="/landing/catalog/books/book"
            />
        ))}
    </div>
);