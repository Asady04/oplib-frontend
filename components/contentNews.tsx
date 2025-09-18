// =======================================================================
// FILE: /components/contentNews.tsx
// =======================================================================
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

export const ContentNews = () => (
    <section className="bg-white p-6 sm:p-8 my-8 rounded-xl shadow-2xl">
        <article>
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">Telkom Has a New Branch</h1>
                <p className="text-gray-600 mt-2">By <span className="font-semibold">Aliza Nurfitrian Meizahra</span></p>
                <p className="text-sm text-blue-500 mt-1">Wednesday, August 21, 2024 17:33 WIB</p>
            </header>
            <figure className="mb-8">
                <Image src="/assets/image/kampus-surabaya.png" alt="News image" width={1600} height={900} layout="responsive" className="rounded-lg shadow-lg"/>
            </figure>
            <div className="prose max-w-none text-gray-700">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
            <footer className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="flex items-center gap-2 font-semibold text-gray-700"><FontAwesomeIcon icon={faTags} />Tags</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                    {["Technology", "Natural Resources", "Indonesia Maju", "Development"].map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </footer>
        </article>
    </section>
);