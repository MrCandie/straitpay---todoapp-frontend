import { Flex, Image } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Flex width="100%" align="center" height="100%">
      <Flex w="100%" height="100%" position="relative">
        <Image width="100%" src="/bg.png" height="100%" fit="cover" />
        <Flex
          height="100%"
          position="absolute"
          top="0"
          left="0"
          w="100%"
          align="start"
          direction="column"
          gap="1rem"
          overflow="scroll"
          padding="1rem"
        >
          {data?.map((_, i) => (
            <TodoItem key={i} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
