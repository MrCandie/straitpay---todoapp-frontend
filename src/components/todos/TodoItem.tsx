import { Flex, Text, Tag, Button } from "@chakra-ui/react";
import { FaListCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function TodoItem() {
  return (
    <Flex
      w="100%"
      align="center"
      boxShadow="md"
      bg="#fff"
      borderRadius="10px"
      gap="1rem"
      padding="0.5rem"
      justify="space-between"
    >
      <Flex
        align="center"
        borderRadius="100%"
        justify="center"
        padding="1rem"
        bg="green.100"
      >
        <FaListCheck />
      </Flex>
      <Flex align="start" direction="column" gap="0.4rem" flex="1">
        <Text
          fontSize="15px"
          color="#333"
          fontWeight="normal"
          textTransform="capitalize"
        >
          finish straitpay assessment
        </Text>
        <Flex align="center" gap="0.3rem">
          <Text
            fontSize="13px"
            color="#333"
            fontWeight="normal"
            textTransform="capitalize"
          >
            Priority:
          </Text>
          <Tag size="sm" variant="solid" colorScheme="red">
            High
          </Tag>
        </Flex>
      </Flex>
      <Flex align="center" gap="0.3rem">
        <Button size="xs" variant="ghost">
          <MdEdit />
        </Button>
        <Button size="xs" variant="ghost">
          <IoMdCheckmarkCircleOutline />
        </Button>
      </Flex>
    </Flex>
  );
}
