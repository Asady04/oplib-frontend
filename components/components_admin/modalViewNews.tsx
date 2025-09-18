// =======================================================================
// FILE: /components/components_admin/modalViewNews.tsx
// FIXES: Replaced <img> with <Image>, made layout responsive.
// =======================================================================
"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  ModalHeader,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTags } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";

export default function ModalViewNews() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<FontAwesomeIcon icon={faEye} />}
      >
        See More
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="5xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl font-bold text-center">Telkom Memiliki Cabang Baru</ModalHeader>
              <ModalBody>
                <div className="text-center text-sm text-gray-500">
                    <p>Penulis: Aliza Nurfitrian Meizahra</p>
                    <p>Rabu, 21 Agustus 2024 17:33 WIB</p>
                </div>
                <div className="relative w-full aspect-video mt-4">
                    <Image
                        src="/assets/image/kampus-surabaya.png"
                        alt="image-news"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <p className="text-gray-700 text-base text-left mt-4 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci dolores aliquid nobis vel praesentium, enim, eveniet
                  labore dicta deserunt error dolorum sunt dignissimos delectus
                  reprehenderit beatae magni ipsa aspernatur numquam.
                  <br /> <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaerat unde ex rerum obcaecati quos, doloremque sit deserunt.
                  Et molestiae doloribus ad quaerat, aspernatur dolor sint,
                  autem reprehenderit nulla totam corporis!
                </p>
                <div className="flex items-center gap-2 mt-5">
                  <h6 className="flex items-center text-gray-800 gap-2 font-semibold">
                    <FontAwesomeIcon icon={faTags} />
                    TAGS:
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    <span className="border text-xs font-semibold text-gray-700 px-2 py-1 rounded-lg">Teknologi</span>
                    <span className="border text-xs font-semibold text-gray-700 px-2 py-1 rounded-lg">Indonesia Maju</span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
