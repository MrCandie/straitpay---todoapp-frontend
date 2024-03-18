import ReusableModal from "../reusables/ReusableModal";
import { Flex } from "@chakra-ui/react";

export default function ViewTodo({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <ReusableModal isOpen={isOpen} onClose={onClose} title="View Todo">
      <Flex w="100%" align="start" direction="column" gap="1rem"></Flex>
    </ReusableModal>
  );
}
