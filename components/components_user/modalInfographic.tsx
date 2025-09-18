// =======================================================================
// FILE: /components/components_user/modalInfographic.tsx
// FIXES: Replaced <img> with <Image>, improved modal styling.
// =======================================================================
"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
} from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function ModalInfographic({ name, imgURL }: { name: string; imgURL: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const imageList = imgURL.split(",");

  return (
    <>
      <button
        onClick={onOpen}
        className="text-left hover:font-bold w-full"
      >
        {name}
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        size="5xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalBody className="p-2">
            <div className="space-y-2">
              {imageList.map((item, index) => (
                <div key={index} className="relative w-full aspect-[16/9]">
                  <Image
                    alt={`Infographic image ${index + 1}`}
                    src={item.trim()}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
