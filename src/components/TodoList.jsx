import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const TodoList = ({
  handleRemoveElement,
  handleAddCompleted,
  handleShowModal,
  todoList,
}) => {
  return (
    <div>
      <div>
        {todoList.map((element, index) => (
          <Todo
            key={index}
            handleRemoveElement={handleRemoveElement}
            handleAddCompleted={handleAddCompleted}
            handleShowModal={handleShowModal}
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
  handleShowModal: PropTypes.func,
  todoList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default TodoList;
