// =======================================================================
// FILE: /components/components_admin/modalAddInfografis.tsx
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
  useDisclosure,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPenToSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Image from "next/image";

export default function ModalAddInfografis() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setSelectedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<FontAwesomeIcon icon={faPlusSquare} />}
      >
        Upload Infografis
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faPenToSquare} />
                Add Infografis
              </ModalHeader>
              <ModalBody>
                <div className="relative w-full aspect-video bg-gray-200 rounded-md flex items-center justify-center border-2 border-dashed">
                    {selectedImage ? (
                        <Image src={selectedImage} alt="Selected" fill className="object-contain rounded-md" />
                    ) : (
                        <FontAwesomeIcon icon={faCamera} size="3x" className="text-gray-400" />
                    )}
                </div>
                <input type="file" onChange={handleImageChange} className="mt-4 text-sm" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                <Button color="primary" onPress={onClose}>Submit</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}