// =======================================================================
// FILE: /components/components_admin/contentNewsPublish.tsx
// FIXES: Made layout responsive.
// =======================================================================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function ContentNewsPublish() {
  return (
    <div className="space-y-4">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="border border-gray-200 p-3 rounded-lg">
            <h6 className="flex items-center text-blue-600 text-xs font-bold gap-1">
                <FontAwesomeIcon icon={faCalendarDays} className="w-[12px]" />
                24/03/2024
            </h6>
            <h3 className="text-black font-bold text-base mt-1">Telkom memiliki cabang baru</h3>
            <p className="text-gray-600 text-sm mt-2">
                Lorem ipsum is a nonsensical Latin text used to demonstrate the
                visual form of a document or a typeface...
            </p>
            <div className="flex gap-4 mt-3 items-center">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Published</span>
            </div>
        </div>
      ))}
    </div>
  );
}
























