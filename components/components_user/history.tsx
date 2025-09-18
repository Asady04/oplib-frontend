// =======================================================================
// FILE: /components/components_user/history.tsx
// FIXES: Made table responsive.
// =======================================================================
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Pagination,
  Tabs,
  Tab,
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
} from "@heroui/react";
import ModalExtend from "./modalExtend";

const bookRows = [
  { id: "1", date: "20/12/24", title: "Belajar Pemograman Web untuk Pemula", returnDate: "27/12/24", status: "Not Returned" },
  { id: "2", date: "15/11/24", title: "Data Mining Algorithms", returnDate: "22/11/24", status: "Returned" },
  { id: "3", date: "01/10/24", title: "The Power of Habit", returnDate: "08/10/24", status: "Overdue" },
];

const roomRows = [
  { id: "1", date: "20/12/24", name: "Room-1 JKT A", start: "11.00", end: "12.00", status: "Attended" },
  { id: "2", date: "18/12/24", name: "Room-2 BDG", start: "14.00", end: "15.00", status: "Approved" },
  { id: "3", date: "17/12/24", name: "Room-3 SBY", start: "09.00", end: "11.00", status: "Rejected" },
];

export default function HistoryPage() {
  return (
    <section className="bg-white shadow-md rounded-lg p-5">
      <h4 className="flex gap-2 text-dark-red text-2xl font-bold items-center mb-4">
        <FontAwesomeIcon icon={faClockRotateLeft} />
        Activities History
      </h4>
      <Tabs aria-label="History Options">
        <Tab key="books" title="Books">
          <Card>
            <CardBody>
                <Table aria-label="Book History Table">
                    <TableHeader>
                        <TableColumn>DATE</TableColumn>
                        <TableColumn>TITLE</TableColumn>
                        <TableColumn>RETURN DATE</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                        <TableColumn>ACTION</TableColumn>
                    </TableHeader>
                    <TableBody items={bookRows}>
                        {(item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.returnDate}</TableCell>
                                <TableCell>
                                    <Chip color={item.status === "Returned" ? "success" : item.status === "Overdue" ? "danger" : "warning"} variant="flat">{item.status}</Chip>
                                </TableCell>
                                <TableCell>
                                    {item.status === "Not Returned" ? <ModalExtend /> : "-"}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="rooms" title="Rooms">
          <Card>
             <CardBody>
                <Table aria-label="Room History Table">
                    <TableHeader>
                        <TableColumn>DATE</TableColumn>
                        <TableColumn>ROOM NAME</TableColumn>
                        <TableColumn>TIME</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                    </TableHeader>
                    <TableBody items={roomRows}>
                        {(item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{`${item.start} - ${item.end}`}</TableCell>
                                <TableCell>
                                     <Chip color={item.status === "Attended" ? "success" : item.status === "Approved" ? "primary" : item.status === "Rejected" ? "danger" : "default"} variant="flat">{item.status}</Chip>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </section>
  );
}
