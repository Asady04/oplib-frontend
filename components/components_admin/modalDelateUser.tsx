// =======================================================================
// FILE: /components/components_admin/modalDelateUser.tsx
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

export default function ModalDelateUser() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly color="danger" variant="light" aria-label="Delete User">
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-2 text-red-600 font-bold text-xl items-center">
                <FontAwesomeIcon icon={faTrash} /> Delete User
              </ModalHeader>
              <ModalBody>
                <p className="text-center font-semibold">
                  Are you sure you want to delete this user? This action cannot be undone.
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
