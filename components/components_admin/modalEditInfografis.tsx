// =======================================================================
// FILE: /components/components_admin/modalEditInfografis.tsx
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
import { faCamera, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Image from "next/image";

export default function ModalEditInfografis() {
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
      <Button onPress={onOpen} isIconOnly color="warning" variant="light" aria-label="Edit">
        <FontAwesomeIcon icon={faPenToSquare} />
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
                <FontAwesomeIcon
                  icon={faPenToSquare}
                />
                Edit Infografis
              </ModalHeader>
              <ModalBody>
                <div className="relative w-full aspect-video bg-gray-200 rounded-md flex items-center justify-center border-2 border-dashed">
                    {selectedImage ? (
                        <Image src={selectedImage} alt="Selected" fill className="object-contain rounded-md" />
                    ) : (
                        <FontAwesomeIcon icon={faCamera} size="3x" className="text-gray-400" />
                    )}
                </div>
                <input type="file" accept="image/*" onChange={handleImageChange} className="mt-4 text-sm" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                <Button color="primary" onPress={onClose}>Save Changes</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
