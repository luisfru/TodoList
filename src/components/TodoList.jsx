import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const TodoList = ({
  handleRemoveElement,
  handleAddCompleted,
  handleChangeSetTodoEditing,
  handleSetEditingText,
  handleSetEdit,
  handleShowModal,
  todoEditing,
  todoList,
}) => {
  return (
    <div>
      <div>
        {todoList.map((element, index) => (
          <Todo
            key={index}
            todoEditing={todoEditing}
            handleRemoveElement={handleRemoveElement}
            handleChangeSetTodoEditing={handleChangeSetTodoEditing}
            handleSetEditingText={handleSetEditingText}
            handleSetEdit={handleSetEdit}
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
  handleChangeSetTodoEditing: PropTypes.func,
  handleSetEditingText: PropTypes.func,
  handleSetEdit: PropTypes.func,
  handleShowModal: PropTypes.func,
  todoEditing: PropTypes.number,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      text: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default TodoList;
