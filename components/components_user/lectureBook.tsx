// =======================================================================
// FILE: /components/components_user/lectureBook.tsx
// FIXES: Made table responsive.
// =======================================================================
"use client";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowUp,
  faFileCirclePlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Pagination,
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
} from "@heroui/react";

const bookRows = [
  { id: "1", time: "20/12/24", nim: "1892010232", author: "Amba", workflow: "Materi Pembelajaran", title: "Perjalanan mencari kitab python" },
  { id: "2", time: "19/12/24", nim: "1892010232", author: "Jamal", workflow: "Materi Pembelajaran", title: "Advanced Python" },
];

export default function LectureBook() {
  return (
    <section className="bg-white shadow-md rounded-lg p-5 space-y-4">
      <h4 className="flex gap-2 text-dark-red text-2xl font-bold items-center">
        <FontAwesomeIcon icon={faFileArrowUp} />
        Lecture's Book Upload
      </h4>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Input
            placeholder="Search by title or author..."
            className="max-w-xs"
            startContent={<FontAwesomeIcon icon={faSearch} className="text-gray-400" />}
          />
          <NextLink href="/user/lecture-book-upload/add">
            <Button color="primary" startContent={<FontAwesomeIcon icon={faFileCirclePlus} />}>
              Add Data
            </Button>
          </NextLink>
      </div>
      <Card>
        <CardBody>
            <Table aria-label="Lecture Books Table">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>AUTHOR</TableColumn>
                    <TableColumn>WORKFLOW</TableColumn>
                    <TableColumn>TITLE</TableColumn>
                </TableHeader>
                <TableBody items={bookRows}>
                    {(item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>
                                <p className="font-semibold">{item.author}</p>
                                <p className="text-xs text-gray-500">{item.nim}</p>
                                <p className="text-xs text-gray-500">{item.time}</p>
                            </TableCell>
                            <TableCell>{item.workflow}</TableCell>
                            <TableCell>{item.title}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </CardBody>
      </Card>
      <div className="w-full flex justify-center py-3">
        <Pagination total={7} />
      </div>
    </section>
  );
}
