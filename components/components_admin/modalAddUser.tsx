// =======================================================================
// FILE: /components/components_admin/modalAddUser.tsx
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
import ModalAddUserManual from "./modalAddUserManual";
import ModalAddUserExcel from "./modalAddUserExcel";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ModalAddUser() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<FontAwesomeIcon icon={faSquarePlus} />}
      >
        Add User
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Add User Data
              </ModalHeader>
              <ModalBody>
                <p>
                  Would you like to add user data manually or import from an
                  Excel file?
                </p>
              </ModalBody>
              <ModalFooter>
                <ModalAddUserManual />
                <ModalAddUserExcel />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
