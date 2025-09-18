// =======================================================================
// FILE: /components/components_admin/modalEditJournal.tsx
// FIXES: Replaced <img> with <Image>, made form responsive.
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
  Input,
  Textarea,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCamera } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Image from "next/image";

export default function ModalEditJournal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<FontAwesomeIcon icon={faPenToSquare} />}
      >
        Edit Journal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" placement="top-center" size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faPenToSquare} />
                Edit Journal
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/4">
                    <div className="relative w-full aspect-[2/3] bg-gray-200 rounded-md flex items-center justify-center border-2 border-dashed">
                        {selectedImage ? (
                            <Image src={selectedImage} alt="Selected" fill className="object-cover rounded-md" />
                        ) : (
                            <FontAwesomeIcon icon={faCamera} size="2x" className="text-gray-400" />
                        )}
                    </div>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2 text-sm" />
                  </div>
                  <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Title" placeholder="Enter title" />
                    <Input label="Author&apos;s Name" placeholder="Enter author&apos;s name" />
                    <Input label="Publisher" placeholder="Enter publisher" />
                    <Input type="number" label="Year" placeholder="e.g., 2024" />
                  </div>
                </div>
                <Textarea label="Abstract" placeholder="Enter abstract" className="mt-4" />
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
