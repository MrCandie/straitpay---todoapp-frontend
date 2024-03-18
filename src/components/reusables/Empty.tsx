import { Flex } from "@chakra-ui/react";

export default function Empty() {
  return (
    <Flex
      w="100%"
      height="50vh"
      align="center"
      justify="center"
      color="#eee"
      fontSize="15px"
      fontWedight="normal"
    >
      No task found...
    </Flex>
  );
}
