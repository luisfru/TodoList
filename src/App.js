import React, { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

import { STATUS_DEFAULT, STATUS_COMPLETED } from "./constants/todoListStatus";

import { GlobalStyle } from "./styles/globalStyles";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");

  const handleAddToList = (event) => {
    event.preventDefault();

    const newValue = {
      text: text,
      status: STATUS_DEFAULT,
    };

    setText("");
    setTodoList([...todoList, newValue]);
  };

  const handleTypeText = (event) => {
    setText(event.target.value);
  };

  const handleAddCompleted = (index) => {
    const newArray = [...todoList];

    newArray[index].status =
      newArray[index].status === STATUS_DEFAULT
        ? (newArray[index].status = STATUS_COMPLETED)
        : (newArray[index].status = STATUS_DEFAULT);

    setTodoList(newArray);
  };

  const handleRemoveElement = (index) => {
    const newArray = [...todoList];
    newArray.splice(index, 1);

    setTodoList(newArray);
  };

  return (
    <div>
      <GlobalStyle />
      <h2>TodoList</h2>
      <Form
        handleTypeText={handleTypeText}
        handleAddToList={handleAddToList}
        text={text}
      />
      <TodoList
        todoList={todoList}
        handleRemoveElement={handleRemoveElement}
        handleAddCompleted={handleAddCompleted}
      />
    </div>
  );
}

export default App;
