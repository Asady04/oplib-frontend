// =======================================================================
// FILE: /components/components_admin/modalAddUserManual.tsx (THE MAIN FIX IS HERE)
// FIXES: Replaced the default file input with a custom, responsive button.
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
  faSquarePlus,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Image from "next/image";

export default function ModalAddUserManual() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [fileName, setFileName] = useState<string>("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" variant="flat">
        Add Manually
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="4xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faSquarePlus} />
                Add User Data Manually
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
                    {/* THE FIX IS HERE: Custom styled file input */}
                    <Button as="label" htmlFor="file-upload" className="mt-4" variant="bordered" startContent={<FontAwesomeIcon icon={faUpload} />}>
                      Upload Photo
                    </Button>
                    <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    {fileName && <p className="text-xs text-gray-500 mt-2 text-center truncate w-full px-2">{fileName}</p>}
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
                            <button type="button" onClick={toggleVisibility} className="focus:outline-none">
                                <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} className="text-gray-400" />
                            </button>
                        }
                    />
                    <Input type="email" label="Email" placeholder="Enter email" />
                    <Input type="number" label="Phone Number" placeholder="Enter phone number" />
                </div>
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