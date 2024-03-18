import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import AddButton from "./AddButton";
import { useState, useEffect } from "react";
import { getStoredItem } from "../../utils/lib";
import { listMyTodos } from "../../utils/https";
import { ITodo } from "../../interface";
import Loader from "../reusables/Loader";

export default function TodoContainer() {
  const [data, setData] = useState<Array<ITodo>>([]);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const user = getStoredItem("user");
      try {
        setProgress(20);
        setProgress(50);
        const response = await listMyTodos(user);
        setProgress(70);
        setData(response?.data);
        setProgress(100);
      } catch (error) {
        setProgress(100);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Loader progress={progress} setProgress={setProgress} />
      <Flex
        align="start"
        direction="column"
        width={{ lg: "30%", md: "40%", base: "100%" }}
        height="90vh"
        boxShadow="md"
      >
        <Header />
        <SubHeader setData={setData} data={data} />
        <AddButton setData={setData} />
      </Flex>
    </>
  );
}
