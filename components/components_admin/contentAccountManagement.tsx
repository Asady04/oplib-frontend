// =======================================================================
// FILE: /components/components_admin/contentAccountManagement.tsx
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
import ModalReviewUserA from "./modalReviewUserA";
import ModalDelateData from "./modalDelateUser";
import ModalEditUser from "./modalEditUser";

export default function ContentAccountManagement() {
  return (
    <>
      <Table aria-label="Account Management Table" className="min-w-full">
        <TableHeader>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">NO</TableColumn>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">NAME</TableColumn>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">ID NUMBER</TableColumn>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">USERNAME</TableColumn>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">EMAIL</TableColumn>
          <TableColumn className="text-center p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {[...Array(3)].map((_, i) => (
            <TableRow key={i + 1}>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">{i + 1}</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">Tony Reichert</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">1101223089</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">ndn-rg</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">username@telkomuniversity.ac.id</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex gap-2 items-center justify-center">
                        <ModalReviewUserA />
                        <ModalEditUser />
                        <ModalDelateData />
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









