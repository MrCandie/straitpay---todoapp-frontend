import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import AddButton from "./AddButton";

export default function TodoContainer() {
  return (
    <Flex
      align="start"
      direction="column"
      width={{ lg: "30%", md: "40%", base: "100%" }}
      height="90vh"
      boxShadow="md"
    >
      <Header />
      <SubHeader />
      <AddButton />
    </Flex>
  );
}
