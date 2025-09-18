// =======================================================================
// FILE: /components/modalSearch.tsx
// =======================================================================
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  DateRangePicker,
  Select,
  SelectItem,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

export default function ModalSearch() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        className="text-white bg-dark-red"
        aria-label="Advanced Search"
        onPress={onOpen}
      >
        <FontAwesomeIcon icon={faSearchengin} />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Advanced Search
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select label="Type" placeholder="Select type" variant="bordered">
                  <SelectItem key="book">Book</SelectItem>
                  <SelectItem key="journal">Journal</SelectItem>
                </Select>
                <Select label="Location" placeholder="Select library" variant="bordered">
                   <SelectItem key="bandung">Bandung</SelectItem>
                   <SelectItem key="jakarta">Jakarta</SelectItem>
                   <SelectItem key="surabaya">Surabaya</SelectItem>
                </Select>
                <Input label="Title" placeholder="Enter title" variant="bordered" />
                <Input label="Author" placeholder="Enter author" variant="bordered" />
                <Input label="Publisher" placeholder="Enter publisher" variant="bordered" />
                <Input label="Subject" placeholder="Enter subject" variant="bordered" />
                <div className="md:col-span-2">
                    <DateRangePicker label="Entry Date" variant="bordered" fullWidth />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-dark-red text-white" onPress={onClose}>
                  Search
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}