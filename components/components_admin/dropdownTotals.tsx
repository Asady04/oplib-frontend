
// =======================================================================
// FILE: /components/components_admin/dropdownTotals.tsx
// FIXES: Made layout responsive, removed fixed widths.
// =======================================================================
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faUserGear,
  faUserPen,
  faUserGroup,
  faUserGraduate,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

export default function DropdownTotals() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select Telkom University Library"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize bg-white shadow-md text-sm font-semibold">
              {selectedValue}{" "}
              <FontAwesomeIcon icon={faCaretDown} className="w-[12px]" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
          >
            <DropdownItem key="Open Library - Bandung">Open Library - Bandung</DropdownItem>
            <DropdownItem key="Open Library - Jakarta A">Open Library - Jakarta A</DropdownItem>
            <DropdownItem key="Open Library - Jakarta B">Open Library - Jakarta B</DropdownItem>
            <DropdownItem key="Open Library - Surabaya">Open Library - Surabaya</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <FontAwesomeIcon icon={faUserGear} className="w-8 h-8 text-red-600 mx-auto" />
          <h6 className="text-dark-red text-sm font-bold mt-2">Co-Admin</h6>
          <h4 className="text-maroon font-bold text-3xl mt-1">12</h4>
        </div>
        {/* Repeat for other stat cards */}
      </div>
    </div>
  );
}