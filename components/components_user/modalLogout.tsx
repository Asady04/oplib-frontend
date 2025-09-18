// =======================================================================
// FILE: /components/components_user/modalLogout.tsx
// FIXES: Standardized button component and props.
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

export default function ModalLogout({ openstat }: { openstat: boolean }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {openstat ? (
        <Button
          onClick={onOpen}
          className="bg-white text-dark-red font-semibold w-full"
          endContent={<FontAwesomeIcon icon={faSignOutAlt} />}
        >
          Logout
        </Button>
      ) : (
        <Button isIconOnly onPress={onOpen} variant="light" aria-label="Logout">
          <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 text-white" />
        </Button>
      )}

      <Modal size="sm" isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
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