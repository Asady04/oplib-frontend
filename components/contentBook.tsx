// =======================================================================
// FILE: /components/contentBook.tsx
// =======================================================================
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBullhorn,
  faBookBookmark,
  faReceipt,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

// Helper Components for contentBook.tsx
const DetailSection_Book = ({ title, icon, color, children }: { title: string; icon: any; color: string; children: React.ReactNode }) => (
    <div>
        <h3 className={`inline-flex items-center gap-2 text-white text-sm font-semibold py-1 px-4 rounded-full mb-3`} style={{ backgroundColor: color }}>
            <FontAwesomeIcon icon={icon} />
            {title}
        </h3>
        <div className="text-gray-700 text-sm space-y-1">
            {children}
        </div>
    </div>
);

const DetailItem_Book = ({ label, value }: { label: string; value: string }) => (
    <p><span className="font-semibold">{label}:</span> {value}</p>
);

const AbstractSection_Book = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-8">
        <h3 className="inline-flex items-center gap-2 text-white text-sm font-semibold py-1 px-4 rounded-full mb-4 bg-orange-500">
            <FontAwesomeIcon icon={faSwatchbook} />
            Abstract
        </h3>
        <div className="prose prose-sm max-w-none text-gray-600">
            {children}
        </div>
    </div>
);

const BookOrJournalDetail = ({ isBook }: { isBook: boolean }) => (
    <section className="bg-white p-6 sm:p-8 my-8 rounded-xl shadow-2xl">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0 lg:w-1/4">
                <img
                    src={isBook ? "/assets/image/cover buku3.svg" : "/assets/image/cover buku journal.svg"}
                    alt="Cover"
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
            </div>
            <div className="flex-grow">
                <h2 className="text-gray-800 text-3xl font-bold mb-6">
                    Data Mining: Algoritma dan Contoh Perhitungan Matematis
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <DetailSection_Book title="Author" icon={faUser} color="#84cc16">
                        <DetailItem_Book label="Name" value="G.W.F. Hegel" />
                        <DetailItem_Book label="Type" value="Individual" />
                        <DetailItem_Book label="Editor" value="-" />
                        <DetailItem_Book label="Translator" value="-" />
                    </DetailSection_Book>
                    <DetailSection_Book title="Publisher" icon={faBullhorn} color="#f59e0b">
                        <DetailItem_Book label="Name" value="Anak Hebat Indonesia" />
                        <DetailItem_Book label="City" value="Yogyakarta" />
                        <DetailItem_Book label="Year" value="2024" />
                    </DetailSection_Book>
                    <DetailSection_Book title="Information" icon={faReceipt} color="#3b82f6">
                        <DetailItem_Book label="Code" value="24.01.704" />
                        <DetailItem_Book label="Classification" value="150.1 - Philosophy and Theory of Psychology" />
                        <DetailItem_Book label="Type" value={isBook ? "Book - Circulation" : "Journal - Reference"} />
                        <DetailItem_Book label="Subject" value="Phenomenology" />
                        <DetailItem_Book label="Shelf No." value="5" />
                    </DetailSection_Book>
                    <DetailSection_Book title="Circulation" icon={faBookBookmark} color="#ef4444">
                        <DetailItem_Book label="Rental Price" value="IDR 0,00" />
                        <DetailItem_Book label="Daily Fine" value="IDR 1.000,00" />
                        <DetailItem_Book label="Type" value="Circulation" />
                    </DetailSection_Book>
                </div>
            </div>
        </div>
        <AbstractSection_Book>
            <p>As a master teacher, John Santrock connects students to current research and real-world application...</p>
            <p>This commitment is reflected in the text&apos;s comprehensive coverage...</p>
        </AbstractSection_Book>
    </section>
);

export const ContentBook = () => <BookOrJournalDetail isBook={true} />;