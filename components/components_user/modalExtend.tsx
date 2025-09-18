// =======================================================================
// FILE: /components/components_user/modalExtend.tsx
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
  DatePicker,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ModalExtend() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="success"
        startContent={<FontAwesomeIcon icon={faCalendarPlus} />}
      >
        Extend
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-green-700 font-bold text-xl">
                Extend Duration
              </ModalHeader>
              <ModalBody>
                <p className="text-lg font-semibold">&quot;Book Title&quot;</p>
                <DatePicker label="New Return Date" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>Cancel</Button>
                <Button color="success" onPress={onClose}>Extend</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}