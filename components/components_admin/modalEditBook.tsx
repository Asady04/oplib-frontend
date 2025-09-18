// =======================================================================
// FILE: /components/components_admin/modalEditBook.tsx
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

export default function ModalEditBook() {
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
        Edit Book
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" placement="top-center" size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faPenToSquare} />
                Edit Book
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
                    <Input label="Title Book" placeholder="Enter title book" />
                    <Input label="Author's Name" placeholder="Enter author's name" />
                    <Input label="Editor" placeholder="Enter editor" />
                    <Input label="Translator" placeholder="Enter translator" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <Input label="Publisher name" placeholder="Enter publisher name" />
                    <Input label="City" placeholder="Enter city" />
                    <Input type="number" label="Year of Publication" placeholder="e.g., 2024" />
                </div>
                <Textarea label="Abstraction" placeholder="Enter abstraction" className="mt-4" />
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
