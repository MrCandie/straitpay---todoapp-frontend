import { Flex, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      width="100%"
      align="center"
      justify="space-between"
      boxShadow="md"
      bg="#202450"
      padding="1rem"
    >
      <Text fontSize="16px" color="#fff" fontWeight="medium">
        {new Date().toLocaleDateString()}
      </Text>
      <Text fontSize="16px" color="#fff" fontWeight="medium">
        {new Date().toLocaleTimeString()}
      </Text>
    </Flex>
  );
}
