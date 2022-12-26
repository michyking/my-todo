import React, { useState } from "react";
import {
  Flex,
  Heading,
  VStack,
  FormControl,
  InputGroup,
  Input,
  Button,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo) {
      setTodoList((prev) => [
        ...prev,
        { id: new Date().getMilliseconds(), todo: todo },
      ]);
      setTodo("");
    } else {
      alert("Please Todo cannot be empty");
    }
  };

  const deleteHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(newTodoList);
  };

  const renderTodoList = todoList.map((val) => {
    const { id, todo } = val;
    return (
      <ListItem
        onClick={() => deleteHandler(id)}
        textTransform={"capitalize"}
        fontSize={"1rem"}
        key={id}>
        {" "}
        {todo}
      </ListItem>
    );
  });

  return (
    <Flex minHeight={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <VStack>
        <VStack gap={2} as={"form"} onSubmit={submitHandler}>
          <Heading fontSize={"2rem"}>Add Todo List</Heading>
          <FormControl>
            <InputGroup>
              <Input
                value={todo}
                onChange={changeHandler}
                type={"text"}
                fontSize={{
                  base: "0.9rem",
                  md: "2xl",
                  lg: "2xl",
                  xl: "3xl",
                }}
                _focus={{ ring: 2, ringColor: "green", border: 0 }}
                placeholder={"Enter Todo"}
              />
            </InputGroup>
          </FormControl>
          <Button colorScheme={"green"} width={"20rem"} type={"submit"}>
            Submit
          </Button>
        </VStack>
        <OrderedList>{renderTodoList}</OrderedList>
      </VStack>
    </Flex>
  );
};

export default App;
