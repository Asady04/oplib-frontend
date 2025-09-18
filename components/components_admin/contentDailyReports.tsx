// =======================================================================
// FILE: /components/components_admin/contentDailyReports.tsx
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
import ModalViewDailyReports from "./modalReviewDailyReports";

export default function ContentDailyReports() {
  return (
    <>
      <Table aria-label="Daily Reports Table" className="min-w-full">
        <TableHeader>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</TableColumn>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Report Author</TableColumn>
          <TableColumn className="text-center p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Books Borrowed</TableColumn>
          <TableColumn className="text-center p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Rooms Rented</TableColumn>
          <TableColumn className="text-center p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Description</TableColumn>
        </TableHeader>
        <TableBody>
          {[...Array(3)].map((_, i) => (
            <TableRow key={i + 1}>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">23/03/2024</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">Aliza Nurfitrian Meizahra</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700 text-center">24</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700 text-center">4</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex items-center justify-center">
                        <ModalViewDailyReports />
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