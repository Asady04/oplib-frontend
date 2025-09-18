// =======================================================================
// FILE: /components/components_user/modalBooking.tsx
// FIXES: Made form responsive.
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
  Select,
  SelectItem,
  Input,
  DatePicker,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ModalBooking({ rooms }: { rooms: any[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-dark-red text-white"
        startContent={<FontAwesomeIcon icon={faBellConcierge} />}
      >
        Order
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" size="lg">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Order Your Room
              </ModalHeader>
              <ModalBody className="space-y-4">
                <Select label="Room" placeholder="Select your room...">
                  {rooms.map((room: any) => (
                    <SelectItem key={room.id}>
                      {`${room.name} (${room.capacity} people)`}
                    </SelectItem>
                  ))}
                </Select>
                <Input isReadOnly label="Phone Number" defaultValue="082172819274" />
                <DatePicker label="Date" />
                <div className="grid grid-cols-2 gap-4">
                    <Select label="Start Time" placeholder="Select start time...">
                        <SelectItem key="8:00">8:00</SelectItem>
                        <SelectItem key="9:00">9:00</SelectItem>
                    </Select>
                    <Select label="Duration" placeholder="Select duration...">
                        <SelectItem key="60">60 Minutes</SelectItem>
                        <SelectItem key="120">120 Minutes</SelectItem>
                    </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>Cancel</Button>
                <Button color="primary" onPress={onClose}>Make Reservation</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
