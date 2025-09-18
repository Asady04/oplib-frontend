// =======================================================================
// FILE: /admin/page.tsx (This file is correct, no changes needed from last version)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/page.tsx file with this code.

"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGear,
  faUserPen,
  faUserGroup,
  faUserGraduate,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeAdmin() {
  return (
    <section>
      {/* Main Content Area - Contains both statistics and further content */}
      <div className="p-4 sm:p-6 md:p-8 space-y-8">
        {/* Statistics Cards Section */}
        <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">Dashboard Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {/* Card 1: Co-Admin */}
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg text-gray-800 transform hover:-translate-y-1 transition-transform duration-300">
                    <h6 className="flex items-center text-gray-600 font-bold text-xs sm:text-sm gap-2">
                        <FontAwesomeIcon icon={faUserGear} className="text-red-600" />
                        <span>Co-Admin</span>
                    </h6>
                    <p className="text-center font-bold text-3xl sm:text-4xl mt-2">12</p>
                </div>
                {/* Card 2: Staff */}
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg text-gray-800 transform hover:-translate-y-1 transition-transform duration-300">
                    <h6 className="flex items-center text-gray-600 font-bold text-xs sm:text-sm gap-2">
                        <FontAwesomeIcon icon={faUserPen} className="text-red-600" />
                        <span>Staff</span>
                    </h6>
                    <p className="text-center font-bold text-3xl sm:text-4xl mt-2">12</p>
                </div>
                {/* Card 3: Lecture */}
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg text-gray-800 transform hover:-translate-y-1 transition-transform duration-300">
                    <h6 className="flex items-center text-gray-600 font-bold text-xs sm:text-sm gap-2">
                        <FontAwesomeIcon icon={faUserGroup} className="text-red-600" />
                        <span>Lecture</span>
                    </h6>
                    <p className="text-center font-bold text-3xl sm:text-4xl mt-2">12</p>
                </div>
                {/* Card 4: Student */}
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg text-gray-800 transform hover:-translate-y-1 transition-transform duration-300">
                    <h6 className="flex items-center text-gray-600 font-bold text-xs sm:text-sm gap-2">
                        <FontAwesomeIcon icon={faUserGraduate} className="text-red-600" />
                        <span>Student</span>
                    </h6>
                    <p className="text-center font-bold text-3xl sm:text-4xl mt-2">12</p>
                </div>
                {/* Card 5: Catalog */}
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg text-gray-800 col-span-2 md:col-span-1 lg:col-span-1 transform hover:-translate-y-1 transition-transform duration-300">
                    <h6 className="flex items-center text-gray-600 font-bold text-xs sm:text-sm gap-2">
                        <FontAwesomeIcon icon={faSwatchbook} className="text-red-600" />
                        <span>Catalog</span>
                    </h6>
                    <p className="text-center font-bold text-3xl sm:text-4xl mt-2">12,890</p>
                </div>
            </div>
        </div>

        {/* Further Content Section */}
        <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700">Further Content</h2>
            <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
                <p>Your other page content goes here...</p>
            </div>
        </div>
      </div>
    </section>
  );
}