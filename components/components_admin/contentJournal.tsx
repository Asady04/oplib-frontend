// =======================================================================
// FILE: /components/components_admin/contentJournal.tsx
// FIXES: Replaced <img> with <Image>, made layout responsive.
// =======================================================================
import ModalEditJournal from "./modalEditJournal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faUser,
  faReceipt,
  faSwatchbook,
  faBullhorn,
  faBookBookmark,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function ContentCatalogJournal() {
  return (
    <section>
        <div className="flex justify-end mb-4">
          <ModalEditJournal />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 w-full md:w-1/3">
             <div className="relative w-full aspect-[2/3] max-w-xs mx-auto">
                <Image
                    src="/assets/image/cover buku journal.svg"
                    alt="cover journal 1"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                />
             </div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-black text-start text-3xl font-bold">
              Data Mining: Algoritma dan Contoh Perhitungan Matematis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Details sections */}
            </div>
          </div>
        </div>
        <div className="mt-6 border-t pt-6">
            <h3 className="flex items-center text-lg font-bold gap-2">
                <FontAwesomeIcon icon={faSwatchbook} className="text-orange-500" />
                Abstraksi
            </h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                As a master teacher, John Santrock connects students to current
                research and real-world application...
            </p>
        </div>
    </section>
  );
}