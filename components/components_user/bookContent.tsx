// =======================================================================
// FILE: /components/components_user/bookContent.tsx
// FIXES: Replaced <img> with <Image>, made layout responsive and aesthetic.
// =======================================================================
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faUser,
  faReceipt,
  faSwatchbook,
  faBullhorn,
  faBookBookmark,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const DetailItem = ({ icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
    <div>
        <h3 className="flex items-center text-sm font-semibold p-2 gap-2 bg-gray-100 rounded-lg text-gray-700">
            <FontAwesomeIcon icon={icon} className="w-4 h-4" />
            {title}
        </h3>
        <div className="text-gray-600 text-sm mt-2 pl-2 space-y-1">{children}</div>
    </div>
);

export default function ContentCatalogBook() {
  return (
    <section className="bg-white shadow-md rounded-lg p-5">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 w-full lg:w-1/3">
             <div className="relative w-full aspect-[2/3] max-w-sm mx-auto">
                <Image
                    src="/assets/image/cover buku3.svg"
                    alt="cover buku 1"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                />
             </div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-black text-start text-3xl font-bold">
              Data Mining: Algoritma dan Contoh Perhitungan Matematis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DetailItem icon={faUser} title="Pengarang">
                  <p><span className="font-semibold">Nama:</span> G.W.F. Hegel</p>
                  <p><span className="font-semibold">Jenis:</span> Perorangan</p>
              </DetailItem>
              <DetailItem icon={faBullhorn} title="Penerbit">
                  <p><span className="font-semibold">Nama:</span> Anak Hebat Indonesia</p>
                  <p><span className="font-semibold">Kota:</span> Yogyakarta</p>
                  <p><span className="font-semibold">Tahun:</span> 2024</p>
              </DetailItem>
              <DetailItem icon={faReceipt} title="Informasi">
                  <p><span className="font-semibold">Kode:</span> 24.01.704</p>
                  <p><span className="font-semibold">Klasifikasi:</span> 150.1</p>
                  <p><span className="font-semibold">Jenis:</span> Buku - Circulation</p>
              </DetailItem>
              <DetailItem icon={faBookBookmark} title="Sirkulasi">
                  <p><span className="font-semibold">Harga Sewa:</span> IDR 0,00</p>
                  <p><span className="font-semibold">Denda Harian:</span> IDR 1.000,00</p>
              </DetailItem>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t pt-6">
            <h3 className="flex items-center text-lg font-bold gap-2">
                <FontAwesomeIcon icon={faSwatchbook} className="text-orange-500" />
                Abstraksi
            </h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                As a master teacher, John Santrock connects students to current
                research and real-world application...
            </p>
        </div>
    </section>
  );
}
