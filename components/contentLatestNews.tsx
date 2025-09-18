// =======================================================================
// FILE: /components/contentLatestNews.tsx
// =======================================================================
import React from "react";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

// Helper Components for contentLatestNews.tsx
const LatestNewsItem = ({ title, date, description, imageUrl, href }: {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    href: string;
}) => (
    <NextLink href={href} className="flex gap-4 group bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="w-1/3 flex-shrink-0">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="w-2/3">
            <p className="flex items-center text-blue-500 text-xs font-bold gap-1 mb-1">
                <FontAwesomeIcon icon={faCalendarDays} />
                {date}
            </p>
            <h4 className="font-bold text-gray-800 group-hover:text-dark-red transition-colors">{title}</h4>
            <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                {description}
            </p>
        </div>
    </NextLink>
);

export const ContentLatestNews = () => {
    const newsItems = Array(4).fill({
        title: "Telkom has a new branch",
        date: "24/03/2024",
        description: "Lorem ipsum is a nonsensical Latin text used to demonstrate the visual form of a document...",
        imageUrl: "/assets/image/kampus-surabaya.png",
        href: "/landing/news"
    });

    return (
        <section className="bg-gray-50 p-6 my-8 rounded-xl shadow-lg">
            <h2 className="flex items-center text-2xl font-bold text-gray-800 gap-3 mb-6">
                <FontAwesomeIcon icon={faNewspaper} className="text-dark-red" />
                Latest News
            </h2>
            <div className="space-y-4">
                {newsItems.map((item, index) => (<LatestNewsItem key={index} {...item} />))}
            </div>
        </section>
    );
};