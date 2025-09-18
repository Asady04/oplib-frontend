// =======================================================================
// FILE: /components/components_admin/contentInfografis.tsx
// FIXES: Replaced <img> with <Image>, made table responsive.
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
import Image from "next/image";
import ModalViewInfografis from "./modalReviewInfografis";
import ModalDelateInfografis from "./modalDelateInfografis";
import ModalEditInfografis from "./modalEditInfografis";

export default function ContentInfografis() {
  return (
    <>
      <Table aria-label="Infographics Table" className="min-w-full">
        <TableHeader>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">NO</TableColumn>
          <TableColumn className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">TITLE</TableColumn>
          <TableColumn className="text-center p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">IMAGE</TableColumn>
          <TableColumn className="text-center p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {[...Array(3)].map((_, i) => (
            <TableRow key={i + 1}>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">{i + 1}</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">Books Borrowing</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700 text-center">
                    <Image src="/assets/image/perpus.png" alt="Infographic" width={130} height={73} className="rounded-md inline-block" />
                </TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex gap-2 items-center justify-center">
                        <ModalViewInfografis />
                        <ModalEditInfografis />
                        <ModalDelateInfografis />
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


