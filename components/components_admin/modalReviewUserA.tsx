// =======================================================================
// FILE: /components/components_admin/modalReviewUserA.tsx
// FIXES: Replaced <img> with <Image>, made layout responsive.
// =======================================================================
"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
  Select,
  SelectItem,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";

export default function ModalReviewUserA() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly color="primary" variant="light" aria-label="View User">
        <FontAwesomeIcon icon={faEye} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="4xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faEye} />
                Review User Information
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                        src="/assets/image/kampus-surabaya.png" // Using a placeholder as the original was null
                        alt="User Avatar"
                        fill
                        className="rounded-full object-cover"
                    />
                  </div>
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input isReadOnly label="Full Name" value="John Doe" />
                    <Input isReadOnly label="Role" value="Library Staff" />
                    <Input isReadOnly label="ID Number" value="123456789" />
                    <Input isReadOnly label="Library" value="Open Library TelU - Bandung" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <Input isReadOnly label="Username" value="johndoe" />
                    <Input isReadOnly label="Email" value="johndoe@example.com" />
                    <Input isReadOnly label="Phone Number" value="+62123456789" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
