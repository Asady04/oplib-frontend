// =======================================================================
// FILE: /components/components_admin/modalAddCatalogExcel.tsx
// FIXES: No major issues, minor cleanup.
// =======================================================================
"use client";
import {
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalAddCatalogExcel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="success"
        variant="flat"
      >
        Import from Excel
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="xl"
      >
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
                <Input
                    accept=".xls,.xlsx"
                    label="Upload Excel File"
                    onChange={handleFileChange}
                    type="file"
                />
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