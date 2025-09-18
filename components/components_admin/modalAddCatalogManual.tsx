// =======================================================================
// FILE: /components/components_admin/modalAddCatalogManual.tsx (THE MAIN FIX IS HERE)
// FIXES: Replaced the default file input with a custom, responsive button and adjusted spacing.
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
  Textarea,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faSquarePlus, faUpload } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Image from "next/image";

export default function ModalAddCatalogManual() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
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
        variant="flat"
      >
        Add Manually
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        placement="top-center"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faSquarePlus} />
                Add Catalog Manually
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/4 flex flex-col items-center">
                    <div className="relative w-full aspect-[2/3] bg-gray-200 rounded-md flex items-center justify-center border-2 border-dashed">
                        {selectedImage ? (
                            <Image src={selectedImage} alt="Selected" fill className="object-cover rounded-md" />
                        ) : (
                            <FontAwesomeIcon icon={faCamera} size="2x" className="text-gray-400" />
                        )}
                    </div>
                    {/* THE FIX IS HERE: Custom styled file input */}
                    <Button as="label" htmlFor="file-upload-catalog" className="mt-4" variant="bordered" startContent={<FontAwesomeIcon icon={faUpload} />}>
                      Upload Photo
                    </Button>
                    <input id="file-upload-catalog" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    {fileName && <p className="text-xs text-gray-500 mt-2 text-center truncate w-full px-2">{fileName}</p>}
                  </div>
                  <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Title Book" placeholder="Enter title book" />
                    <Input label="Author's Name" placeholder="Enter author's name" />
                    <Input label="Editor" placeholder="Enter editor" />
                    <Input label="Translator" placeholder="Enter translator" />
                    <Input label="Publisher name" placeholder="Enter publisher name" />
                    <Input label="City" placeholder="Enter city" />
                    <Input type="number" label="Year of Publication" placeholder="e.g., 2024" />
                    <Input type="number" label="Book Code" placeholder="Enter book code" />
                    <Input label="Subject" placeholder="Enter subject" />
                    <Input type="number" label="Rack number" placeholder="Enter rack number" />
                  </div>
                </div>
                <Textarea label="Abstraction" placeholder="Enter abstraction" className="mt-4" />
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