// =======================================================================
// FILE: /components/components_admin/contentOperatingHours.tsx
// FIXES: Made table responsive with min-w-full.
// =======================================================================
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@heroui/react";
import ModalDelateTime from "./modalDelateTime";

export default function ContentOperatingHours() {
  return (
    <>
      <Table aria-label="Operating Hours Table" className="min-w-full border-separate border-spacing-y-2">
        <TableHeader>
          <TableColumn className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DAY</TableColumn>
          <TableColumn className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">START TIME</TableColumn>
          <TableColumn className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">END TIME</TableColumn>
          <TableColumn className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {[...Array(3)].map((_, i) => (
            <TableRow key={i + 1} className="bg-gray-50">
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">Monday</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700 text-center">08.00 AM</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700 text-center">05.00 PM</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex items-center justify-center">
                        <ModalDelateTime />
                    </div>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full flex justify-center py-3 mt-5">
        <Pagination total={7} />
      </div>
    </>
  );
}