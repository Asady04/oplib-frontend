// =======================================================================
// FILE 3: /components/components_user/homePage.tsx (The NEW Scrolling Component)
// =======================================================================
// INSTRUCTIONS: Create or replace this file at the specified path.

"use client";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faBook, faJournalWhills } from "@fortawesome/free-solid-svg-icons";

// --- Reusable Book/Journal Card Component ---
const CatalogCard = ({ imageUrl, title, href }: { imageUrl: string; title: string; href: string }) => (
  <NextLink href={href} className="flex-shrink-0 w-36 sm:w-40 group">
    <div className="relative w-full aspect-[2/3] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 144px, 160px"
      />
    </div>
    <p className="mt-2 text-sm font-semibold text-gray-700 truncate group-hover:text-dark-red">{title}</p>
  </NextLink>
);

// --- Reusable Scrolling Section Component ---
const ScrollingSection = ({ title, icon, items, showAllLink }: { title: string; icon: any; items: any[]; showAllLink: string; }) => (
  <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-4">
      <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-dark-red">
        <FontAwesomeIcon icon={icon} />
        {title}
      </h2>
      <NextLink href={showAllLink}>
        <span className="text-sm font-semibold text-blue-600 hover:underline">
          Show all
        </span>
      </NextLink>
    </div>
    {/* THE FIX IS HERE: This container enables horizontal scrolling on all screens */}
    <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 -mb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {items.map((item, index) => (
        <CatalogCard key={index} imageUrl={item.cover} title={item.title} href={item.href} />
      ))}
    </div>
  </section>
);

// --- Main HomePage Component ---
export const LectureHome = () => {
  const popularItems = [
    { cover: "/assets/image/cover buku.svg", title: "PHP & MySQL", href: "/user/book" },
    { cover: "/assets/image/cover buku2.svg", title: "World Internet Report", href: "/user/book" },
    { cover: "/assets/image/cover buku3.svg", title: "Data Mining", href: "/user/book" },
    { cover: "/assets/image/cover buku.svg", title: "Another PHP Book", href: "/user/book" },
    { cover: "/assets/image/cover buku2.svg", title: "Advanced Internet", href: "/user/book" },
    { cover: "/assets/image/cover buku3.svg", title: "Intro to Algorithms", href: "/user/book" },
    { cover: "/assets/image/cover buku.svg", title: "Web Development", href: "/user/book" },
  ];

  const newBooks = [...popularItems].reverse();
  const newJournals = [...popularItems].map(item => ({...item, cover: "/assets/image/cover buku journal.svg", href: "/user/journal"}));

  return (
    <div className="space-y-8">
      <ScrollingSection title="Popular" icon={faFire} items={popularItems} showAllLink="/user/books?sort=popular" />
      <ScrollingSection title="Newest Books" icon={faBook} items={newBooks} showAllLink="/user/books" />
      <ScrollingSection title="Newest Journals" icon={faJournalWhills} items={newJournals} showAllLink="/user/journals" />
    </div>
  );
};