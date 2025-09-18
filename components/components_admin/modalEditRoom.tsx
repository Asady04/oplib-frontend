// =======================================================================
// FILE: /components/components_admin/modalEditRoom.tsx
// FIXES: Replaced <img> with <Image>, made form responsive.
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
  Textarea,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Image from "next/image";

export default function ModalEditRoom() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
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
      <Button onPress={onOpen} isIconOnly color="warning" variant="light" aria-label="Edit Room">
        <FontAwesomeIcon icon={faPenToSquare} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="4xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faPenToSquare} />
                Edit Room Reservation
              </ModalHeader>
              <ModalBody>
                 <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="relative w-full aspect-video bg-gray-200 rounded-md flex items-center justify-center border-2 border-dashed">
                        {selectedImage ? (
                            <Image src={selectedImage} alt="Selected" fill className="object-cover rounded-md" />
                        ) : (
                            <FontAwesomeIcon icon={faCamera} size="2x" className="text-gray-400" />
                        )}
                    </div>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2 text-sm" />
                  </div>
                  <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Room Name" placeholder="Enter room name" />
                    <Select label="Library" placeholder="Select a library">
                        <SelectItem key="bdg">Open Library TelU - Bandung</SelectItem>
                    </Select>
                    <Input type="number" label="Capacity" placeholder="Enter capacity" />
                    <Select label="Status" placeholder="Select a status" onChange={(e) => setStatus(e.target.value)}>
                        <SelectItem key="paid">Paid</SelectItem>
                        <SelectItem key="free">Free</SelectItem>
                    </Select>
                    {status === "paid" && (
                      <Input type="number" label="Price" placeholder="e.g., 50000" className="sm:col-span-2" />
                    )}
                  </div>
                </div>
                <Textarea label="Description" placeholder="Enter description" className="mt-4" />
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