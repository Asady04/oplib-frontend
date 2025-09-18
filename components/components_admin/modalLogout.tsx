// =======================================================================
// FILE: /components/components_admin/modalLogout.tsx
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
  Link,
} from "@heroui/react";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function ModalLogout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly variant="light" aria-label="Logout" className="bg-dark-red text-white-pucat hover:text-dark-red">
        <FontAwesomeIcon icon={faSignOutAlt}/>
      </Button>
      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-red-600 font-bold text-xl">
                Logout
              </ModalHeader>
              <ModalBody>
                <p className="text-center font-semibold">
                  Are you sure you want to sign out?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>Cancel</Button>
                <Button color="danger" as={Link} href="/">Logout</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
