// =======================================================================
// FILE 2: /admin/account-management/page.tsx (FIXED - Table scroll container)
// =======================================================================
// INSTRUCTIONS: Replace the content of your /admin/account-management/page.tsx file with this code.

"use client";
import React from "react";
import { Select, SelectItem, Input } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Assuming these are your custom components
import ModalAddUser from "@/components/components_admin/modalAddUser";
import ContentAccountManagement from "@/components/components_admin/contentAccountManagement";

export default function AccountManagementPage() {
  const role = [
    { key: "all", label: "All Roles" },
    { key: "admin", label: "Administrator" },
    { key: "coadmin", label: "Co-Administrator" },
    { key: "staff", label: "Library Staff" },
    { key: "lecture", label: "Lecture" },
    { key: "student", label: "Student" },
  ];

  return (
    // The banner is now automatically handled by the parent layout.
    // This section only contains the content specific to the Account Management page.
    <section className="p-4 sm:p-6 md:p-8 space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Account Management</h2>

      {/* Filters and Actions Bar */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Search Input */}
          <div className="lg:col-span-2">
            <Input
              isClearable
              radius="lg"
              placeholder="Search by name or ID..."
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

          {/* Role Filter */}
          <Select
            labelPlacement="outside"
            placeholder="Filter by Role"
            className="w-full"
          >
            {role.map((r) => (
              <SelectItem key={r.key} value={r.key}>{r.label}</SelectItem>
            ))}
          </Select>

          {/* Add User Button */}
          <div>
              <ModalAddUser />
          </div>
        </div>
      </div>

      {/* User Data Table/Content */}
      <div className="bg-white rounded-lg shadow-lg p-4">
          {/* THE FIX IS HERE: This wrapper div makes ONLY the table scrollable. */}
          <div className="overflow-x-auto">
              {/* IMPORTANT: For this to work, the table element inside your 
                ContentAccountManagement component should have a class of `min-w-full`.
                Example: <table className="min-w-full ...">
              */}
              <ContentAccountManagement />
          </div>
      </div>
    </section>
  );
}
