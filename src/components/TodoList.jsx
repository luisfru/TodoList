import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const TodoList = ({
  handleRemoveElement,
  handleAddCompleted,
  handleSetTextEditedInTodoList,
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
            handleSetTextEditedInTodoList={handleSetTextEditedInTodoList}
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
  handleSetTextEditedInTodoList: PropTypes.func,
  handleShowModal: PropTypes.func,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      text: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default TodoList;
