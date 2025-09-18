// =======================================================================
// FILE 2: /components/components_user/modalFeedback.tsx (The necessary update)
// =======================================================================
// INSTRUCTIONS: Replace the content of your modalFeedback.tsx file with this code.

"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
  Select,
  SelectItem,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ModalFeedback({ isCollapsed }: { isCollapsed: boolean }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {isCollapsed ? (
        <div className="relative group flex justify-center">
            <Button isIconOnly variant="light" onPress={onOpen} aria-label="Give Feedback">
                <FontAwesomeIcon icon={faCommentDots} className="w-5 h-5 text-white" />
            </Button>
            <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden group-hover:block bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap z-50">
                Give Feedback
            </span>
        </div>
      ) : (
        <Button
            className="text-dark-red font-bold bg-white w-full"
            onPress={onOpen}
        >
            Give Feedback
        </Button>
      )}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Feedback
              </ModalHeader>
              <ModalBody>
                <Select
                  label="Feedback Type"
                  placeholder="Select your feedback type"
                >
                  <SelectItem key="suggestion">Suggestion</SelectItem>
                  <SelectItem key="appreciation">Appreciation</SelectItem>
                  <SelectItem key="complaints">Complaints</SelectItem>
                </Select>
                <Textarea label="Message" placeholder="Enter your message" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>Cancel</Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  endContent={<FontAwesomeIcon icon={faPaperPlane} />}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
