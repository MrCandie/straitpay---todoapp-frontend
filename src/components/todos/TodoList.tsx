import { Flex, Image } from "@chakra-ui/react";
import TodoItem from "./TodoItem";
import { ITodo } from "../../interface";
import Empty from "../reusables/Empty";

export default function TodoList({
  list,
  setData,
}: {
  list: Array<ITodo>;
  setData: (e: Array<ITodo>) => void;
}) {
  return (
    <Flex width="100%" align="center" height="100%">
      <Flex w="100%" height="100%" position="relative">
        <Image
          width="100%"
          src="/bg.png"
          height={{ lg: "85vh", md: "85vh", base: "88vh" }}
          fit="cover"
        />
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
          {list?.length === 0 ? (
            <Empty />
          ) : (
            <>
              {list?.map((el: ITodo, i: number) => (
                <TodoItem setData={setData} item={el} key={i} />
              ))}
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
