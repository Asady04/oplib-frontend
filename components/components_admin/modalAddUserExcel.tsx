// =======================================================================
// FILE: /components/components_admin/modalAddUserExcel.tsx
// FIXES: Made form responsive.
// =======================================================================
"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  Input,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalAddUserExcel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="success" variant="flat">
        Import from Excel
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-2 text-xl font-bold text-green-700">
                <FontAwesomeIcon icon={faFileExcel} />
                Import Data with Excel
              </ModalHeader>
              <ModalBody>
                <p className="text-sm text-gray-600">
                    Please ensure the Excel file follows the required format. Only .xlsx and .xls file formats are accepted.
                </p>
                <Input type="file" accept=".xls,.xlsx" onChange={handleFileChange} label="Upload Excel File" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <Select label="Library" placeholder="Select a library">
                    <SelectItem key="bdg">Open Library TelU - Bandung</SelectItem>
                  </Select>
                  <Select label="Role" placeholder="Select a role">
                    <SelectItem key="student">Student</SelectItem>
                  </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                <Button color="success" disabled={!file} onPress={onClose}>Submit</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
