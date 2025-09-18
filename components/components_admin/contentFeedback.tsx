// =======================================================================
// FILE: /components/components_admin/contentFeedback.tsx
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
import ModalFeedback from "./modalFeedback";

export default function ContentFeedback() {
  return (
    <>
      <Table aria-label="Feedback Table" className="min-w-full">
        <TableHeader>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</TableColumn>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Report Author</TableColumn>
          <TableColumn className="text-center p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback Type</TableColumn>
          <TableColumn className="text-center p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Description</TableColumn>
        </TableHeader>
        <TableBody>
            <TableRow key="1">
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">23/03/2024</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">Aliza Nurfitrian Meizahra</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700 text-center">
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Suggestions</span>
                </TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex items-center justify-center"><ModalFeedback /></div>
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <div className="w-full flex justify-center py-3 mt-5">
        <Pagination total={7} />
      </div>
    </>
  );
}

