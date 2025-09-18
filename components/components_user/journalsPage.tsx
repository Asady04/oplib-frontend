// =======================================================================
// FILE: /components/components_user/journalsPage.tsx
// FIXES: Replaced <img> with <Image>, made layout responsive.
// =======================================================================
"use client";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination } from "@heroui/react";
import Image from "next/image";
import {
  faUser,
  faTags,
  faBullhorn,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";

const journals = Array(12).fill({
    cover: "/assets/image/cover buku journal.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university: "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification: "658 - General management",
    category: "Karya Ilmiah - Skripsi (S1)",
});

export default function JournalsPage() {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {journals.map((journal, index) => (
            <div key={index} className="flex flex-col sm:flex-row bg-white rounded-lg p-4 gap-4 items-start border shadow-sm">
              <div className="flex-shrink-0 text-center mx-auto sm:mx-0">
                <Image
                  src={journal.cover}
                  alt={`Journal Cover ${index + 1}`}
                  width={100}
                  height={150}
                  className="rounded-md object-cover shadow-md"
                />
                <p className="text-gray-500 text-xs italic mt-2">Code: {journal.code}</p>
              </div>
              <div className="text-start flex-1">
                <NextLink href="/user/journal" className="text-base font-semibold mb-2 hover:underline text-gray-800 line-clamp-2">
                  {journal.title}
                </NextLink>
                <div className="space-y-2 mt-2 text-xs text-gray-600">
                    <p className="flex items-center gap-2"><FontAwesomeIcon icon={faUser} className="w-3" /> {journal.author}</p>
                    <p className="flex items-center gap-2"><FontAwesomeIcon icon={faBullhorn} className="w-3" /> {journal.university}</p>
                    <p className="flex items-center gap-2"><FontAwesomeIcon icon={faTags} className="w-3" /> {journal.classification}</p>
                    <p className="flex items-center gap-2"><FontAwesomeIcon icon={faBookBookmark} className="w-3" /> {journal.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      <div className="w-full flex justify-center py-6">
        <Pagination total={7} />
      </div>
    </section>
  );
}