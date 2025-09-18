// =======================================================================
// FILE: /components/components_admin/modalAddCatalog.tsx
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
  Link,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalAddCatalogManual from "./modalAddCatalogManual";
import ModalAddCatalogExcel from "./modalAddCatalogExcel";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ModalAddCatalog() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<FontAwesomeIcon icon={faSquarePlus} />}
      >
        Add Catalog
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
                Add Catalog
              </ModalHeader>
              <ModalBody>
                <p>
                  Would you like to add catalog data manually or import from an
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