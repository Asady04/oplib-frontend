// =======================================================================
// FILE: /components/modalLogin.tsx
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
  Checkbox,
  Input,
  Link,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ModalForgot from "./modalforgot";

export default function ModalLogin() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Button
        onPress={onOpen}
        className="text-white font-bold bg-dark-red"
      >
        Sign In
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Sign In
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="SSO"
                  placeholder="Enter your username"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  variant="bordered"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <FontAwesomeIcon icon={faEyeSlash} className="text-lg text-default-400" />
                      ) : (
                        <FontAwesomeIcon icon={faEye} className="text-lg text-default-400" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />
                <div className="flex py-2 px-1 justify-between items-center">
                  <Checkbox
                    classNames={{
                      label: "text-sm",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <ModalForgot />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-dark-red text-white" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
