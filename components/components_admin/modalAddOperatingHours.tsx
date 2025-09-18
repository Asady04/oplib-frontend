// =======================================================================
// FILE: /components/components_admin/modalAddOperatingHours.tsx
// FIXES: Made layout responsive.
// =======================================================================
"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  TimeInput,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faClock } from "@fortawesome/free-solid-svg-icons";
import { Time } from "@internationalized/date";
import React from "react";

export default function ModalAddHours() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        isIconOnly
        aria-label="Edit Operating Hours"
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon icon={faPenToSquare} />
                Operating Hours Timing
              </ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  {days.map((day) => (
                    <div key={day} className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
                      <Checkbox value={day.toLowerCase()}>{day}</Checkbox>
                      <TimeInput label="Start Time" defaultValue={new Time(8, 0)} />
                      <TimeInput label="End Time" defaultValue={new Time(17, 0)} />
                    </div>
                  ))}
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