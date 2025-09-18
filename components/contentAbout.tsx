// =======================================================================
// FILE: /components/contentAbout.tsx
// =======================================================================
import React from "react";
import Image from "next/image";

// Helper Components for contentAbout.tsx
const PageHero_About = ({ title, imageUrl }: { title: string; imageUrl: string }) => (
    <div className="relative bg-cover bg-center h-[50vh] flex items-center justify-center rounded-2xl shadow-lg overflow-hidden" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-white text-5xl font-extrabold drop-shadow-md">{title}</h1>
    </div>
);

export const ContentAbout = () => (
    <section className="space-y-12 my-8">
        <PageHero_About title="About Us" imageUrl="/assets/image/kampus-surabaya.png" />
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-dark-red pl-4 mb-6">
                Organizational Structure
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
                <Image src="/assets/image/struktur_jabatan.svg" alt="Organizational Structure" width={1200} height={700} layout="responsive" className="rounded-md"/>
            </div>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-dark-red pl-4 mb-6">
                Telkom University Open Library
            </h2>
            <div className="prose max-w-none text-gray-600">
                <p>Telkom University Open Library is a unit under the Vice Rector I for Academic Affairs...</p>
                <p>To achieve this vision, the Open Library has the following missions:</p>
                <ol>
                    <li>Actively acquire, manage, and share knowledge...</li>
                    <li>Actively promote reading and writing interests...</li>
                    <li>Collaborate with all institutions...</li>
                </ol>
                <p>The Open Library holds an "A" accreditation...</p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <div className="bg-red-100 text-dark-red font-semibold p-4 rounded-lg shadow">Open for anyone who wants to learn.</div>
                    <div className="bg-red-100 text-dark-red font-semibold p-4 rounded-lg shadow ml-4">Open to all types of knowledge.</div>
                    <div className="bg-red-100 text-dark-red font-semibold p-4 rounded-lg shadow ml-8">Open to sharing knowledge...</div>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <Image src="/assets/image/logo_akreditasi.svg" alt="Accreditation Logo 1" width={150} height={150} className="transition-transform duration-300 hover:scale-110" />
                    <Image src="/assets/image/logo_akreditasi2.svg" alt="Accreditation Logo 2" width={120} height={120} className="transition-transform duration-300 hover:scale-110" />
                </div>
            </div>
        </div>
    </section>
);









