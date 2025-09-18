// =======================================================================
// FILE: /components/components_admin/sidebar.tsx
// FIXES: Made layout responsive for desktop and mobile.
// =======================================================================
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClock,
  faCalendarAlt,
  faClipboardList,
  faExclamationCircle,
  faBullhorn,
  faBook,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import ModalLogout from "@/components/components_admin/modalLogout";
import Image from "next/image";

const navItems = [
  { href: "/admin/account-management", icon: faUser, label: "Account Management" },
  { href: "/admin/operational-schedule", icon: faClock, label: "Operational Schedule" },
  { href: "/admin/room-reservations", icon: faCalendarAlt, label: "Room Reservations" },
  { href: "/admin/daily-reports", icon: faClipboardList, label: "Daily Reports" },
  { href: "/admin/feedback", icon: faExclamationCircle, label: "User Feedback" },
  { href: "/admin/news-updates", icon: faBullhorn, label: "News & Updates" },
  { href: "/admin/catalog-management", icon: faBook, label: "Catalog Management" },
  { href: "/admin/infografis-management", icon: faCameraRetro, label: "Infografis Management" },
];

export const Sidebar = () => {
  return (
    <div className="flex lg:flex-col justify-between items-center h-full w-full">
      <div className="flex lg:flex-col items-center gap-4 lg:gap-0">
        <NextLink href="/admin" className="hidden lg:block p-1 items-center">
          <Image
            src="/assets/logo/logo_oplib.svg"
            alt="Logo"
            width={40}
            height={40}
            className="mt-6"
          />
        </NextLink>
        <div className="flex flex-row lg:flex-col items-center lg:mt-6 space-x-4 lg:space-x-0 lg:space-y-5 text-dark-red">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <NextLink href={item.href}>
                <FontAwesomeIcon icon={item.icon} className="w-[20px] h-[20px] transition-transform duration-200 group-hover:scale-110" />
              </NextLink>
              <span className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 hidden lg:group-hover:block bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center lg:mb-8">
        <div className="relative group">
          <ModalLogout />
          <span className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 hidden lg:group-hover:block bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};
