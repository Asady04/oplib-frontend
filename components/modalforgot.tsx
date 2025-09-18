// =======================================================================
// FILE: /components/modalforgot.tsx
// =======================================================================
import React from "react";
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

export default function ModalForgot() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Link href="#" size="sm" onPress={onOpen} className="text-dark-red">
        Forgot password?
      </Link>
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Forgot Password
              </ModalHeader>
              <ModalBody>
                <p>
                  Please contact the library staff for assistance with password recovery.
                </p>
                <p className="font-semibold text-center mt-2">
                  albaghdadi@staff.telkomuniversity.ac.id
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button as={Link} href="mailto:albaghdadi@staff.telkomuniversity.ac.id" className="bg-dark-red text-white">
                  Send Email
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}