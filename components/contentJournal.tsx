// =======================================================================
// FILE: /components/contentJournal.tsx
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

// Helper Components for contentJournal.tsx
const DetailSection_Journal = ({ title, icon, color, children }: { title: string; icon: any; color: string; children: React.ReactNode }) => (
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

const DetailItem_Journal = ({ label, value }: { label: string; value: string }) => (
    <p><span className="font-semibold">{label}:</span> {value}</p>
);

const AbstractSection_Journal = ({ children }: { children: React.ReactNode }) => (
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

const BookOrJournalDetail_Journal = ({ isBook }: { isBook: boolean }) => (
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
                    <DetailSection_Journal title="Author" icon={faUser} color="#84cc16">
                        <DetailItem_Journal label="Name" value="G.W.F. Hegel" />
                        <DetailItem_Journal label="Type" value="Individual" />
                        <DetailItem_Journal label="Editor" value="-" />
                        <DetailItem_Journal label="Translator" value="-" />
                    </DetailSection_Journal>
                    <DetailSection_Journal title="Publisher" icon={faBullhorn} color="#f59e0b">
                        <DetailItem_Journal label="Name" value="Anak Hebat Indonesia" />
                        <DetailItem_Journal label="City" value="Yogyakarta" />
                        <DetailItem_Journal label="Year" value="2024" />
                    </DetailSection_Journal>
                    <DetailSection_Journal title="Information" icon={faReceipt} color="#3b82f6">
                        <DetailItem_Journal label="Code" value="24.01.704" />
                        <DetailItem_Journal label="Classification" value="150.1 - Philosophy and Theory of Psychology" />
                        <DetailItem_Journal label="Type" value={isBook ? "Book - Circulation" : "Journal - Reference"} />
                        <DetailItem_Journal label="Subject" value="Phenomenology" />
                        <DetailItem_Journal label="Shelf No." value="5" />
                    </DetailSection_Journal>
                    <DetailSection_Journal title="Circulation" icon={faBookBookmark} color="#ef4444">
                        <DetailItem_Journal label="Rental Price" value="IDR 0,00" />
                        <DetailItem_Journal label="Daily Fine" value="IDR 1.000,00" />
                        <DetailItem_Journal label="Type" value="Circulation" />
                    </DetailSection_Journal>
                </div>
            </div>
        </div>
        <AbstractSection_Journal>
            <p>As a master teacher, John Santrock connects students to current research and real-world application...</p>
            <p>This commitment is reflected in the text&apos;s comprehensive coverage...</p>
        </AbstractSection_Journal>
    </section>
);

export const ContentJournal = () => <BookOrJournalDetail_Journal isBook={false} />;