// =======================================================================
// FILE: /components/components_admin/modalReviewDailyReports.tsx
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

export default function ModalViewDailyReports() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<FontAwesomeIcon icon={faEye} />}
      >
        View Report
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="4xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faEye} />
                View Daily Report
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                        src="/assets/image/kampus-surabaya.png"
                        alt="User Avatar"
                        fill
                        className="rounded-full object-cover"
                    />
                  </div>
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input isReadOnly label="Full Name" value="Aliza Nurfitrian Meizahra" />
                    <Input isReadOnly label="Date" value="23/03/2024" />
                    <Input isReadOnly label="ID Number" value="110122308324" />
                    <Input isReadOnly label="Books Borrowed" value="24" />
                    <Input isReadOnly label="Rooms Rented" value="11" />
                  </div>
                </div>
                <Textarea isReadOnly label="Description" value="Jadi hari keadaan nya sih aman aja, ga ada masalah. aman aja serius... Ga boong aman kok min jangan potong gaji saya..." className="mt-4" />
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
