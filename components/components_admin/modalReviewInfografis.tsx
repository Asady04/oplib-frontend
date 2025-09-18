// =======================================================================
// FILE: /components/components_admin/modalReviewInfografis.tsx
// FIXES: Replaced <img> with <Image>, made layout responsive.
// =======================================================================
"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";

export default function ModalReviewInfografis() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly color="primary" variant="light" aria-label="View Infographic">
        <FontAwesomeIcon icon={faEye} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faEye} />
                View Infografis
              </ModalHeader>
              <ModalBody>
                <div className="relative w-full aspect-video">
                  <Image
                      src="/assets/image/perpus.png"
                      alt="Selected Infographic"
                      fill
                      className="rounded-md object-contain"
                  />
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
