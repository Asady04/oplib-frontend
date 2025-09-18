// =======================================================================
// FILE: /components/components_admin/contentRoomRecervation.tsx
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
import ModalViewRoom from "./modalReviewRoom";
import ModalDelateData from "./modalDelateUser";
import ModalEditRoom from "./modalEditRoom";

export default function ContentRoomRecervations() {
  return (
    <>
      <Table aria-label="Room Reservations Table" className="min-w-full border-separate border-spacing-y-2">
        <TableHeader>
          <TableColumn className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NO</TableColumn>
          <TableColumn className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">IMAGE</TableColumn>
          <TableColumn className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROOM NAME</TableColumn>
          <TableColumn className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">CAPACITY</TableColumn>
          <TableColumn className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</TableColumn>
          <TableColumn className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {[...Array(3)].map((_, i) => (
            <TableRow key={i + 1} className="bg-gray-50">
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">{i + 1}</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700 text-center">
                    <Image src="/assets/image/perpus.png" alt="Room" width={130} height={73} className="rounded-md inline-block" />
                </TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">Room {i + 1}</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700 text-center">4</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700 text-center">Free</TableCell>
                <TableCell className="p-3 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex gap-2 items-center justify-center">
                        <ModalViewRoom />
                        <ModalEditRoom />
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