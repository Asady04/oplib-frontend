// =======================================================================
// FILE: /components/contentBeranda.tsx (Fixed)
// =======================================================================
// INSTRUCTIONS: The fixed height on the "Recent News" section has been
// removed to prevent it from overlapping with the footer.
// =======================================================================
import React from "react";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookJournalWhills,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

// Helper Components for contentBeranda.tsx
const SectionHeader = ({ icon, title, href }: { icon: any; title: string; href: string }) => (
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

const BookCover = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full">
    <img
      src={src}
      alt={alt}
      className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    />
  </div>
);

const NewsCard = ({ imageUrl, title, description, href }: { imageUrl: string; title: string; description: string; href: string }) => (
    <NextLink href={href} className="block group relative rounded-xl overflow-hidden shadow-lg h-full">
        <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
            <h3 className="text-white text-xl font-bold transition-transform duration-300 group-hover:-translate-y-2">
                {title}
            </h3>
            <p className="text-white/80 text-sm mt-2 max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                {description}
            </p>
        </div>
    </NextLink>
);

export const ContentBeranda = () => {
  const books = [
    { src: "/assets/image/cover buku.svg", alt: "Cover Buku 1" },
    { src: "/assets/image/cover buku2.svg", alt: "Cover Buku 2" },
    { src: "/assets/image/cover buku3.svg", alt: "Cover Buku 3" },
    { src: "/assets/image/cover buku.svg", alt: "Cover Buku 4" },
    { src: "/assets/image/cover buku2.svg", alt: "Cover Buku 5" },
    { src: "/assets/image/cover buku3.svg", alt: "Cover Buku 6" },
    { src: "/assets/image/cover buku.svg", alt: "Cover Buku 7" },
    { src: "/assets/image/cover buku2.svg", alt: "Cover Buku 8" },
    { src: "/assets/image/cover buku3.svg", alt: "Cover Buku 9" },
  ];
  const journals = Array(9).fill({ src: "/assets/image/cover buku journal.svg", alt: "Cover Journal" });

  return (
    <div className="space-y-16 my-8">
      <div className="relative bg-[url('/assets/image/tultbandung.svg')] bg-cover bg-center h-[70vh] flex items-center justify-center rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-red/50 to-black/60" />
        <div className="relative z-10 text-center p-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Welcome to the Open Library
          </h1>
          <h2 className="text-white/90 text-2xl md:text-3xl font-semibold mt-2 drop-shadow-md">
            Telkom University
          </h2>
        </div>
      </div>
      <section>
        <SectionHeader icon={faBook} title="Books" href="/landing/catalog/books" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-5">
          {books.map((book, index) => (
            <BookCover key={index} src={book.src} alt={`${book.alt} ${index + 1}`} />
          ))}
        </div>
      </section>
      <section>
        <SectionHeader icon={faBookJournalWhills} title="Journals" href="/landing/catalog/journals" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-5">
          {journals.map((journal, index) => (
            <BookCover key={index} src={journal.src} alt={`${journal.alt} ${index + 1}`} />
          ))}
        </div>
      </section>
      <section>
        <SectionHeader icon={faNewspaper} title="Recent News" href="/landing/news" />
        {/* The fixed height h-[450px] has been removed from this container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="min-h-[400px]">
                <NewsCard 
                    imageUrl="/assets/image/news1.png"
                    title="Telkom has a new branch"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea labore dicta, explicabo adipisci placeat nostrum odit."
                    href="/landing/news"
                />
            </div>
            <div className="grid grid-rows-2 gap-6 min-h-[400px]">
                 <NewsCard 
                    imageUrl="/assets/image/news2.png"
                    title="New Library Opening Hours"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    href="/landing/news"
                />
                 <NewsCard 
                    imageUrl="/assets/image/news3.png"
                    title="Annual Book Fair Announced"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    href="/landing/news"
                />
            </div>
        </div>
      </section>
    </div>
  );
};
