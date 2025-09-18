// =======================================================================
// FILE: /components/components_admin/modalDelateTime.tsx
// FIXES: Standardized button component.
// =======================================================================
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ModalDelateTime() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="danger" startContent={<FontAwesomeIcon icon={faTrash} />}>
        Delete
      </Button>
      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-2 text-red-600 font-bold text-xl items-center">
                <FontAwesomeIcon icon={faTrash} /> Delete Time
              </ModalHeader>
              <ModalBody>
                <p className="text-center font-semibold">
                  Are you sure you want to delete this time slot?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>Cancel</Button>
                <Button color="danger" onPress={onClose}>Delete</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
