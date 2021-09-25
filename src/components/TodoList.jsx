import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const TodoList = ({ handleRemoveElement, handleAddCompleted, todoList }) => {
  return (
    <div>
      <div>
        {todoList.map((element, index) => (
          <Todo
            key={index}
            index={index}
            handleRemoveElement={handleRemoveElement}
            handleAddCompleted={handleAddCompleted}
            {...element}
          />
        ))}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  handleRemoveElement: PropTypes.func,
  handleAddCompleted: PropTypes.func,
  todoList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default TodoList;
