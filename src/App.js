import React, { useState } from "react";

import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
// import Todo from "./Components/Todo";

import { GlobalStyle } from "./styles/globalStyles";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");

  const handleAddToList = (event) => {
    event.preventDefault();

    const newValue = {
      text: text,
    };

    setTodoList([...todoList, newValue]);
  };

  const handleTypeText = (event) => {
    setText(event.target.value);
  };
  const handleRemoveElement = (element) => {
    setTodoList(
      todoList
        .slice(0, element)
        .concat(todoList.slice(element + 1, todoList.length))
    );
  };
  console.log(handleRemoveElement);
  return (
    <div>
      <GlobalStyle />
      <h2>TodoList</h2>
      <Form handleTypeText={handleTypeText} handleAddToList={handleAddToList} />
      {/* <Todo handleRemoveElement={handleRemoveElement} /> */}

      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
