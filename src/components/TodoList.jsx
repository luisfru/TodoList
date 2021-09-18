import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const TodoList = ({ handleRemoveElement, todoList }) => {
  return (
    <div>
      <div>
        {todoList.map((element, index) => (
          <Todo
            key={index}
            handleRemoveElement={handleRemoveElement}
            text={element.text}
          />
        ))}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  handleRemoveElement: PropTypes.func,
  todoList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default TodoList;
