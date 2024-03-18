import { useState } from "react";
import InputComponent from "../reusables/Input";
import ReusableModal from "../reusables/ReusableModal";
import { Flex, Stack, Checkbox, Text, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export default function AddTodo({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({ name: "", start_date: "" });
  return (
    <ReusableModal isOpen={isOpen} onClose={onClose} title="Add Todo">
      <Flex w="100%" align="start" direction="column" gap="1rem">
        <InputComponent
          placeholder="Task Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
        <InputComponent
          placeholder="Start Date"
          type="datetime-local"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
        <Flex w="100%" align="start" direction="column" gap="1rem">
          <Text fontSize="15px" fontWeight="normal" color="#333">
            Priority Level
          </Text>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="red">High</Checkbox>
            <Checkbox colorScheme="yellow" defaultChecked>
              Medium
            </Checkbox>
            <Checkbox colorScheme="gray">Low</Checkbox>
          </Stack>
        </Flex>
        <Button
          leftIcon={<FaPlus />}
          w="100%"
          size="md"
          variant="solid"
          bg="#202450"
          color="#fff"
        >
          Add
        </Button>
      </Flex>
    </ReusableModal>
  );
}
