import React, { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

import {
  STATUS_COMPLETED,
  STATUS_UNCOMPLETED,
} from "./constants/todoListStatus";

import { GlobalStyle } from "./styles/globalStyles";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoListFilter, setTodoListFilter] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);
  const [text, setText] = useState("");

  const handleAddToList = (event) => {
    event.preventDefault();

    setText("");
    setTodoList([
      ...todoList,
      {
        text: text,
        id: new Date().valueOf(),
        completed: false,
      },
    ]);
  };

  const handleTypeText = (event) => {
    setText(event.target.value);
  };

  const handleAddCompleted = (id) => {
    setTodoList(
      todoList.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            completed: element.completed ? false : true,
          };
        }
        return element;
      })
    );
    setTodoListFilter(todoListFilter.filter((element) => element.id !== id));
  };

  const handleRemoveElement = (id) => {
    setTodoList(todoList.filter((element) => element.id !== id));
    setTodoListFilter(todoListFilter.filter((element) => element.id !== id));
  };

  const handleChangeFilter = (event) => {
    if (event.target.value === STATUS_COMPLETED) {
      setFilterApplied(true);
      setTodoListFilter(todoList.filter((element) => element.completed));
      return;
    }

    if (event.target.value === STATUS_UNCOMPLETED) {
      setFilterApplied(true);
      setTodoListFilter(todoList.filter((element) => !element.completed));
      return;
    }

    setFilterApplied(false);
    setTodoListFilter([]);
  };
  console.log(todoList);
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
