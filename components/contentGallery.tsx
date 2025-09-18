// =======================================================================
// FILE: /components/contentGallery.tsx
// =======================================================================
import React from "react";

// Helper Components for contentGallery.tsx
const PageHero_Gallery = ({ title, imageUrl }: { title: string; imageUrl: string }) => (
    <div className="relative bg-cover bg-center h-[50vh] flex items-center justify-center rounded-2xl shadow-lg overflow-hidden" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-white text-5xl font-extrabold drop-shadow-md">{title}</h1>
    </div>
);

const GalleryCard = ({ title, imageUrl }: { title: string; imageUrl: string }) => (
    <div className="relative group rounded-xl overflow-hidden shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-4 left-4 bg-dark-red/80 text-white text-sm font-semibold py-1 px-3 rounded-full">
            {title}
        </div>
    </div>
);

export const ContentGallery = () => {
    const galleries = [
        { title: "Tel-U Campus Bandung", imageUrl: "/assets/image/vr-oplib-bandung.png" },
        { title: "Tel-U Jakarta - Campus A", imageUrl: "/assets/image/vr-oplilb-jkt-kampus A.png" },
        { title: "Tel-U Jakarta - Campus B", imageUrl: "/assets/image/vr-oplib-jkt-kampus B.png" },
        { title: "Tel-U Campus Geger Kalong", imageUrl: "/assets/image/vr-oplib-gegerkalong.png" },
        { title: "Tel-U Campus Surabaya", imageUrl: "/assets/image/vr-oplib-surabaya.png" },
    ];

    return (
        <section className="space-y-12 my-8">
            <PageHero_Gallery title="Gallery" imageUrl="/assets/image/kampus-jakartaA.png" />
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-dark-red pl-4 mb-6">
                    Tel-U Openlibrary Virtual Tour
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {galleries.map(gallery => (<GalleryCard key={gallery.title} {...gallery} />))}
                </div>
            </div>
        </section>
    );
};