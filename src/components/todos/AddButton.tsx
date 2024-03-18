import { Flex, useDisclosure } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import AddTodo from "./AddTodo";

export default function AddButton() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <AddTodo isOpen={isOpen} onClose={onClose} />
      <Flex
        position="fixed"
        bottom="10"
        left="0"
        w="100%"
        align="center"
        justify="center"
      >
        <Flex
          padding="2rem"
          borderRadius="100%"
          align="center"
          justify="center"
          bg="#2a2b54"
          color="#fff"
          boxShadow="xl"
          cursor="pointer"
          onClick={onOpen}
        >
          <FaPlus />
        </Flex>
      </Flex>
    </>
  );
}
