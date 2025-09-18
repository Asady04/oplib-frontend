// =======================================================================
// FILE: /components/components_admin/modalAddJournal.tsx
// FIXES: No major issues, minor cleanup.
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
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalAddCatalogManual from "./modalAddCatalogManual";
import ModalAddCatalogExcel from "./modalAddCatalogExcel";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ModalAddJournal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<FontAwesomeIcon icon={faSquarePlus} />}
      >
        Add Journal
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Add Journal
              </ModalHeader>
              <ModalBody>
                <p>
                  Would you like to add journal data manually or import from an
                  Excel file?
                </p>
              </ModalBody>
              <ModalFooter>
                <ModalAddCatalogManual />
                <ModalAddCatalogExcel />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}