// =======================================================================
// FILE: /components/components_admin/modalAddNews.tsx
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
  DatePicker,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faSquarePlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Image from "next/image";

export default function ModalAddNews() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

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

  const handleTagKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newTag = event.currentTarget.value.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        event.currentTarget.value = "";
      }
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<FontAwesomeIcon icon={faSquarePlus} />}
      >
        Add News
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="4xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faSquarePlus} />
                Add News
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
                    <Input label="News Headlines" placeholder="Add news headlines" />
                    <Input label="Writer" placeholder="Enter writer&apos;s name" />
                    <DatePicker label="Date" />
                    <Select label="Status" placeholder="Select a status">
                        <SelectItem key="pending">Pending</SelectItem>
                        <SelectItem key="published">Published</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="mt-4">
                    <Input label="Tags" placeholder="Enter tags, press Enter to add" onKeyDown={handleTagKeyDown} />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag, index) => (
                        <div key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-2">
                          {tag}
                          <button onClick={() => handleRemoveTag(index)}><FontAwesomeIcon icon={faTimes} className="w-2 h-2" /></button>
                        </div>
                      ))}
                    </div>
                </div>
                <Textarea label="Description" placeholder="Enter description.." className="mt-4" />
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