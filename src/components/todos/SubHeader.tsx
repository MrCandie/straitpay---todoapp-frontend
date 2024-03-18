import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MdChecklistRtl } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import TodoList from "./TodoList";
import { ITodo } from "../../interface";
import { useEffect, useState } from "react";

export default function SubHeader({
  data,
  setData,
}: {
  data: Array<ITodo>;
  setData: (e: Array<ITodo>) => void;
}) {
  const [list, setList] = useState<Array<ITodo>>([]);

  useEffect(() => {
    const completed = data?.filter((el) => el.status === "completed");
    setList(completed);
  }, [data]);

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
          All ({data ? data?.length?.toLocaleString() : 0})
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
          Completed ({list ? list?.length?.toLocaleString() : 0})
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel padding="0rem" marginTop="1rem">
          <TodoList setData={setData} list={data} />
        </TabPanel>

        <TabPanel padding="0rem" marginTop="1rem">
          <TodoList list={list} setData={setData} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
