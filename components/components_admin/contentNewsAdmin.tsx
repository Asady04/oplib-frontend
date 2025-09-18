// =======================================================================
// FILE: /components/components_admin/contentNewsAdmin.tsx
// FIXES: Replaced <img> with <Image>, made layout responsive.
// =======================================================================
import ModalEditNews from "./modalEditNews";
import ModalViewNews from "./modalViewNews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function ContentNewsAdmin() {
  return (
    <div className="space-y-4">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex flex-col sm:flex-row border border-gray-200 p-3 gap-4 rounded-lg">
            <div className="relative w-full sm:w-1/3 h-40 sm:h-auto flex-shrink-0">
                <Image
                    src="/assets/image/kampus-surabaya.png"
                    alt="image-news"
                    fill
                    className="rounded-md object-cover"
                />
            </div>
            <div className="flex flex-col justify-between text-start">
                <div className="flex justify-between items-start mb-2">
                    <h6 className="flex items-center text-blue-600 text-xs font-bold gap-1">
                        <FontAwesomeIcon icon={faCalendarDays} className="w-[12px]" />
                        24/03/2024
                    </h6>
                    <ModalEditNews />
                </div>
                <h3 className="text-black font-bold text-base mt-1">Telkom memiliki cabang baru</h3>
                <p className="text-gray-600 text-sm mt-2 text-ellipsis overflow-hidden">
                    Lorem ipsum is a nonsensical Latin text used to demonstrate the
                    visual form of a document or a typeface...
                </p>
                <div className="flex gap-4 mt-3 items-center">
                    <ModalViewNews />
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Pending</span>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}
