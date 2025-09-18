// =======================================================================
// FILE: /components/components_admin/modalReviewRoom.tsx
// FIXES: Replaced <img> with <Image>, made layout responsive.
// =======================================================================
"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Button,
  Textarea,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";

export default function ModalViewRoom() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly color="primary" variant="light" aria-label="View Room">
        <FontAwesomeIcon icon={faEye} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="4xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faEye} />
                View Room Reservation
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="relative w-full aspect-video bg-gray-200 rounded-md">
                        <Image src="/assets/image/perpus.png" alt="Room Image" fill className="object-cover rounded-md" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input isReadOnly label="Room Name" value="Meeting Room 1" />
                    <Input isReadOnly label="Library" value="Open Library TelU - Bandung" />
                    <Input isReadOnly label="Capacity" value="50" />
                    <Input isReadOnly label="Status" value="Paid" />
                    <Input isReadOnly label="Price" value="50000" className="sm:col-span-2" />
                  </div>
                </div>
                <Textarea isReadOnly label="Description" value="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components." className="mt-4" />
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