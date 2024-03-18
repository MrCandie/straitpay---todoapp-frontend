import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MdChecklistRtl } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import TodoList from "./TodoList";

export default function SubHeader() {
  return (
    <Tabs width="100%">
      <TabList>
        <Tab
          display="flex"
          align="center"
          justify="center"
          direction="column"
          gap="8px"
          width="50%"
        >
          <FaListUl />
          All
        </Tab>
        <Tab
          width="50%"
          display="flex"
          align="center"
          justify="center"
          direction="column"
          gap="8px"
        >
          <MdChecklistRtl />
          Completed
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel padding="0rem" marginTop="1rem">
          <TodoList />
        </TabPanel>

        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
