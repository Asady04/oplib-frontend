// =======================================================================
// FILE: /admin/room-reservations/page.tsx (The NEW Responsive Page)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your /admin/room-reservations/page.tsx file with this code.

"use client";
import React from "react";
import { Select, SelectItem, Input } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Assuming these are your custom components
import ModalAddRoom from "@/components/components_admin/modalAddRoom";
import ContentRoomRecervations from "@/components/components_admin/contentRoomRecervation";

export default function RoomReservationsPage() {
  const library = [
    { key: "bdg", label: "Open Library TelU - Bandung" },
    { key: "jktA", label: "Open Library TelU - Jakarta A" },
    { key: "jktB", label: "Open Library TelU - Jakarta B" },
    { key: "srby", label: "Open Library TelU - Surabaya" },
  ];

  const role = [
    { key: "all", label: "All Users" },
    { key: "lecture", label: "Lecture" },
    { key: "student", label: "Student" },
  ];

  return (
    // The banner is now automatically handled by the parent admin/layout.tsx.
    // This section only contains the content specific to this page.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Room Reservations</h2>

      {/* Filters and Actions Bar */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Search Input */}
          <div className="lg:col-span-2">
            <Input
              isClearable
              radius="lg"
              placeholder="Search by name or reservation ID..."
              startContent={
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-400"
                />
              }
              classNames={{
                  inputWrapper: "bg-gray-100 hover:bg-gray-200",
              }}
            />
          </div>

          {/* Library Filter */}
          <Select
            labelPlacement="outside"
            placeholder="Filter by Library"
            className="w-full"
          >
            {library.map((lib) => (
              <SelectItem key={lib.key} value={lib.key}>{lib.label}</SelectItem>
            ))}
          </Select>
          
          {/* User Role Filter */}
          <Select
            labelPlacement="outside"
            placeholder="Filter by User"
            className="w-full"
          >
            {role.map((r) => (
              <SelectItem key={r.key} value={r.key}>{r.label}</SelectItem>
            ))}
          </Select>

        </div>
      </div>

      {/* Reservations Table/Content */}
      <div className="bg-white rounded-lg shadow-lg p-4">
          {/* This wrapper div makes ONLY the table scrollable on small screens */}
          <div className="overflow-x-auto">
              {/* IMPORTANT: For this to work, the table element inside your 
                ContentRoomRecervations component should have a class of `min-w-full`.
                Example: <table className="min-w-full ...">
              */}
              <ContentRoomRecervations />
          </div>
      </div>
    </section>
  );
}
