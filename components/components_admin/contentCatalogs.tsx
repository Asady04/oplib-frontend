// =======================================================================
// FILE: /components/components_admin/contentCatalogs.tsx
// FIXES: Replaced <Image> with width/height, made grids responsive.
// =======================================================================
import NextLink from "next/link";
import ModalAddCatalogs from "./modalAddCatalog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faJournalWhills,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function ContentCatalogs() {
  return (
    <section className="space-y-8">
      {/* Popular Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center">
            <FontAwesomeIcon icon={faSwatchbook} className="w-[17px]" />
            Popular
          </h4>
          <ModalAddCatalogs />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
          {[...Array(9)].map((_, i) => (
            <Image
              key={i}
              width={100}
              height={150}
              src="/assets/image/cover buku.svg"
              alt={`cover buku ${i + 1}`}
              className="w-full h-auto rounded-md transition-transform duration-300 hover:scale-105 shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Book section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center">
            <FontAwesomeIcon icon={faBook} className="w-[17px]" />
            Books
          </h4>
          <NextLink href="/admin/catalog-management/books">
            <span className="text-sm font-semibold text-blue-600 hover:underline">
              Show all
            </span>
          </NextLink>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
           {[...Array(9)].map((_, i) => (
            <Image
              key={i}
              width={100}
              height={150}
              src={`/assets/image/cover buku${i % 3 + 1}.svg`}
              alt={`cover buku ${i + 1}`}
              className="w-full h-auto rounded-md transition-transform duration-300 hover:scale-105 shadow-md"
            />
          ))}
        </div>
      </div>

      {/* journal section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center">
            <FontAwesomeIcon icon={faJournalWhills} className="w-[17px]" />{" "}
            Journals
          </h4>
          <NextLink href="/admin/catalog-management/journals">
             <span className="text-sm font-semibold text-blue-600 hover:underline">
              Show all
            </span>
          </NextLink>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
           {[...Array(9)].map((_, i) => (
            <Image
              key={i}
              width={100}
              height={150}
              src="/assets/image/cover buku journal.svg"
              alt={`cover journal ${i + 1}`}
              className="w-full h-auto rounded-md transition-transform duration-300 hover:scale-105 shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}