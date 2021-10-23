import React, { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

import { setLocalStorage, getLocalStorage } from "./utils/localStorage";

import {
  LOCAL_TODO_LIST,
  LOCAL_TODO_LIST_DELETED,
} from "./constants/localStorage";
import {
  STATUS_COMPLETED,
  STATUS_DELETED,
  STATUS_UNCOMPLETED,
  STATUS_ALL,
} from "./constants/todoListStatus";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const [todoList, setTodoList] = useState(
    getLocalStorage(LOCAL_TODO_LIST, [])
  );
  const [todoListDeleted, setTodoListDeleted] = useState(
    getLocalStorage(LOCAL_TODO_LIST_DELETED, [])
  );
  const [todoListFilter, setTodoListFilter] = useState([]);
  const [filterApplied, setFilterApplied] = useState(STATUS_ALL);
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
    const newTodoListDeleted = [
      ...todoListDeleted,
      ...todoList.filter((element) => element.id === id),
    ];

    setLocalStorage(LOCAL_TODO_LIST, newTodoList);
    setLocalStorage(LOCAL_TODO_LIST_DELETED, newTodoListDeleted);

    setTodoList(newTodoList);
    setTodoListDeleted(newTodoListDeleted);
    setTodoListFilter(todoListFilter.filter((element) => element.id !== id));
  };

  const handleChangeFilter = (event) => {
    if (event.target.value === STATUS_COMPLETED) {
      setFilterApplied(STATUS_COMPLETED);
      setTodoListFilter(todoList.filter((element) => element.completed));
      return;
    }

    if (event.target.value === STATUS_UNCOMPLETED) {
      setFilterApplied(STATUS_UNCOMPLETED);
      setTodoListFilter(todoList.filter((element) => !element.completed));
      return;
    }

    if (event.target.value === STATUS_DELETED) {
      setFilterApplied(STATUS_DELETED);
      return;
    }

    setFilterApplied(STATUS_ALL);
    setTodoListFilter([]);
  };

  const getTodoList = () => {
    if (
      filterApplied === STATUS_COMPLETED ||
      filterApplied === STATUS_UNCOMPLETED
    ) {
      return todoListFilter;
    }

    if (filterApplied === STATUS_DELETED) {
      return todoListDeleted;
    }

    return todoList;
  };

  return (
    <div>
      <GlobalStyles />
      <h2>TodoList</h2>
      <Form
        handleTypeText={handleTypeText}
        handleAddToList={handleAddToList}
        handleChangeFilter={handleChangeFilter}
        text={text}
      />
      <TodoList
        todoList={getTodoList()}
        handleRemoveElement={handleRemoveElement}
        handleAddCompleted={handleAddCompleted}
      />
    </div>
  );
}

export default App;
