import React, { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

import { STATUS_ALL, STATUS_COMPLETED } from "./constants/todoListStatus";

import { GlobalStyle } from "./styles/globalStyles";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoListFilter, setTodoListFilter] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);
  const [text, setText] = useState("");

  const handleAddToList = (event) => {
    event.preventDefault();

    const newValue = {
      text: text,
      id: new Date().valueOf(),
      status: STATUS_ALL,
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
      newArray[index].status === STATUS_ALL
        ? (newArray[index].status = STATUS_COMPLETED)
        : (newArray[index].status = STATUS_ALL);

    filterApplied ? setTodoListFilter(newArray) : setTodoList(newArray);
  };

  const handleRemoveElement = (index) => {
    const newArray = filterApplied ? [...todoListFilter] : [...todoList];
    newArray.splice(index, 1);

    filterApplied ? setTodoListFilter(newArray) : setTodoList(newArray);
  };

  const handleChangeFilter = (event) => {
    if (event.target.value === STATUS_COMPLETED) {
      const todoListCompleted = todoList.filter(
        (element) => element.status === STATUS_COMPLETED
      );
      setFilterApplied(true);
      setTodoListFilter(todoListCompleted);
    } else {
      setFilterApplied(false);
      setTodoListFilter([]);
    }
  };

  return (
    <div>
      <GlobalStyle />
      <h2>TodoList</h2>
      <Form
        handleTypeText={handleTypeText}
        handleAddToList={handleAddToList}
        handleChangeFilter={handleChangeFilter}
        text={text}
      />
      <TodoList
        todoList={filterApplied ? todoListFilter : todoList}
        handleRemoveElement={handleRemoveElement}
        handleAddCompleted={handleAddCompleted}
      />
    </div>
  );
}

export default App;
