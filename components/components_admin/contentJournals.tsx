// =======================================================================
// FILE: /components/components_admin/contentJournals.tsx
// FIXES: Replaced <img> with <Image>, made layout responsive.
// =======================================================================
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination } from "@heroui/react";
import Image from "next/image";
import {
  faJournalWhills,
  faUser,
  faTags,
  faBullhorn,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";

const journals = Array(6).fill({
    cover: "/assets/image/cover buku journal.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university: "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification: "658 - General management",
    category: "Karya Ilmiah - Skripsi (S1)",
    additionalCategory: "Procurement",
});

export default function ContentCatalogJournals() {
  return (
    <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {journals.map((journal, index) => (
            <div key={index} className="flex flex-col sm:flex-row bg-gray-50 rounded-lg p-4 gap-4 items-start sm:items-center border">
              <div className="flex-shrink-0 text-center">
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
                <NextLink href="/admin/catalog-management/journals/journal" className="text-sm font-semibold mb-2 hover:underline text-gray-800">
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
      <div className="w-full flex justify-center py-3 mt-5">
        <Pagination total={7} />
      </div>
    </section>
  );
}
