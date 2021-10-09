import React, { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

import { setLocalStorage, getLocalStorage } from "./utils/localStorage";

import { LOCAL_TODO_LIST } from "./constants/localStorage";
import {
  STATUS_COMPLETED,
  STATUS_UNCOMPLETED,
} from "./constants/todoListStatus";

import { GlobalStyle } from "./styles/globalStyles";

function App() {
  const [todoList, setTodoList] = useState(
    getLocalStorage(LOCAL_TODO_LIST, [])
  );
  const [todoListFilter, setTodoListFilter] = useState([]);
  const [filterApplied, setFilterApplied] = useState(false);
  const [text, setText] = useState("");

  const handleAddToList = (event) => {
    event.preventDefault();

    const newTodoList = [
      ...todoList,
      {
        text: text,
        id: new Date().valueOf(),
        completed: false,
      },
    ];

    setText("");
    setTodoList(newTodoList);
    setLocalStorage(LOCAL_TODO_LIST, newTodoList);
  };

  const handleTypeText = (event) => {
    setText(event.target.value);
  };

  const handleAddCompleted = (id) => {
    const newTodoList = todoList.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          completed: element.completed ? false : true,
        };
      }
      return element;
    });

    setLocalStorage(LOCAL_TODO_LIST, newTodoList);
    setTodoList(newTodoList);
    setTodoListFilter(todoListFilter.filter((element) => element.id !== id));
  };

  const handleRemoveElement = (id) => {
    const newTodoList = todoList.filter((element) => element.id !== id);

    setLocalStorage(LOCAL_TODO_LIST, newTodoList);
    setTodoList(newTodoList);
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
