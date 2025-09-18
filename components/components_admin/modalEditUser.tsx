// =======================================================================
// FILE: /components/components_admin/modalEditUser.tsx
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
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCamera,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Image from "next/image";

export default function ModalEditUser() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

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
      <Button onPress={onOpen} isIconOnly color="warning" variant="light" aria-label="Edit User">
        <FontAwesomeIcon icon={faPenToSquare} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="4xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faPenToSquare} />
                Edit User Data
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/4 flex flex-col items-center">
                    <div className="relative w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed">
                        {selectedImage ? (
                            <Image src={selectedImage} alt="Selected" fill className="object-cover rounded-full" />
                        ) : (
                            <FontAwesomeIcon icon={faCamera} size="2x" className="text-gray-400" />
                        )}
                    </div>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2 text-sm" />
                  </div>
                  <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Full Name" placeholder="Enter full name" />
                    <Select label="Role" placeholder="Select a role" onChange={(e) => setSelectedRole(e.target.value)}>
                      <SelectItem key="student">Student</SelectItem>
                      <SelectItem key="lecture">Lecture</SelectItem>
                    </Select>
                    <Input type="number" label="ID Number" placeholder="Enter ID number" />
                    <Select label="Library" placeholder="Select a library">
                      <SelectItem key="bdg">Open Library TelU - Bandung</SelectItem>
                    </Select>
                  </div>
                </div>
                {(selectedRole === "lecture" || selectedRole === "student") && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <Select label="Faculty" placeholder="Select a faculty">
                      <SelectItem key="fte">Fakultas Teknik Elektro (FTE)</SelectItem>
                    </Select>
                    <Select label="Department" placeholder="Select a department">
                       <SelectItem key="if">Informatika</SelectItem>
                    </Select>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <Input label="Username" placeholder="Enter username" />
                    <Input 
                        label="Password" 
                        placeholder="Enter password"
                        type={isVisible ? "text" : "password"}
                        endContent={
                            <button type="button" onClick={toggleVisibility}>
                                <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} />
                            </button>
                        }
                    />
                    <Input type="email" label="Email" placeholder="Enter email" />
                    <Input type="number" label="Phone Number" placeholder="Enter phone number" />
                </div>
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