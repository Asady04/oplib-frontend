// =======================================================================
// FILE: /components/contentCatalog.tsx
// =======================================================================
import React from "react";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookJournalWhills,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";

// Helper Components for contentCatalog.tsx
const SectionHeader_Catalog = ({ icon, title, href }: { icon: any; title: string; href: string }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="flex items-center text-gray-800 font-bold text-3xl gap-3">
      <FontAwesomeIcon icon={icon} className="text-dark-red" />
      {title}
    </h2>
    <NextLink
      href={href}
      className="text-sm font-semibold text-dark-red hover:text-maroon hover:underline transition-colors"
    >
      Show all
    </NextLink>
  </div>
);

const BookCover_Catalog = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full">
    <img
      src={src}
      alt={alt}
      className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    />
  </div>
);

const InfoCard = ({ title, count }: { title: string; count: string }) => (
    <div className="bg-gradient-to-br from-dark-red to-red-600 p-6 rounded-xl text-white shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-white/90">{title}</h3>
        <p className="text-4xl font-bold mt-2">{count}</p>
    </div>
);

export const ContentCatalog = () => {
    const newReleasesCount = 20;
    const booksCount = 1130;
    const journalsCount = 1815;
    const totalCount = newReleasesCount + booksCount + journalsCount;
    const covers = ["/assets/image/cover buku journal.svg","/assets/image/cover buku2.svg","/assets/image/cover buku journal.svg","/assets/image/cover buku.svg","/assets/image/cover buku2.svg","/assets/image/cover buku3.svg","/assets/image/cover buku.svg","/assets/image/cover buku journal.svg","/assets/image/cover buku3.svg"];

    return (
        <section className="space-y-12 my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <InfoCard title="Total Items" count={`${totalCount}+`} />
                <InfoCard title="New Releases" count={`${newReleasesCount}+`} />
                <InfoCard title="Books" count={`${booksCount}+`} />
                <InfoCard title="Journals" count={`${journalsCount}+`} />
            </div>
            <section>
                <SectionHeader_Catalog icon={faCalendarPlus} title="New Releases" href="/landing/catalog/latest" />
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-5">
                    {covers.map((src, index) => (<BookCover_Catalog key={index} src={src} alt={`New Release ${index + 1}`} />))}
                </div>
            </section>
            <section>
                <SectionHeader_Catalog icon={faBook} title="Books" href="/landing/catalog/books" />
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-5">
                    {covers.map((src, index) => (<BookCover_Catalog key={index} src={src} alt={`Book ${index + 1}`} />))}
                </div>
            </section>
            <section>
                <SectionHeader_Catalog icon={faBookJournalWhills} title="Journals" href="/landing/catalog/journals" />
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-5">
                    {covers.map((src, index) => (<BookCover_Catalog key={index} src={src} alt={`Journal ${index + 1}`} />))}
                </div>
            </section>
        </section>
    );
};