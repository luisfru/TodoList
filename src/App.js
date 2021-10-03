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

    setText("");
    setTodoList([
      ...todoList,
      {
        text: text,
        id: new Date().valueOf(),
        status: STATUS_ALL,
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
            status:
              element.status === STATUS_ALL ? STATUS_COMPLETED : STATUS_ALL,
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
