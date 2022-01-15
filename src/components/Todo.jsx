import React, { useContext } from "react";
import PropTypes from "prop-types";

import { FilterStatus } from "../context/FilterStatus";

import { STATUS_DELETED } from "../constants/todoListStatus";

import { StyleText } from "../styles/components/Todo";

const Todo = ({
  handleRemoveElement,
  handleChangeSetTodoEditing,
  handleSetEditingText,
  handleSetEdit,
  handleAddCompleted,
  handleShowModal,
  todoEditing,
  text,
  completed,
  id,
}) => {
  const filterStatus = useContext(FilterStatus);

  if (todoEditing === id) {
    return (
      <div>
        <input
          value={text}
          onChange={(event) => handleSetEditingText(event.target.value)}
        />
        <button onClick={() => handleSetEdit(id)}>Save</button>
      </div>
    );
  }

  return (
    <div>
      <StyleText strikeThrough={completed}>{text}</StyleText>
      <button onClick={() => handleChangeSetTodoEditing(id)}>Edit</button>
      <button onClick={() => handleAddCompleted(id)}>Complete</button>
      {filterStatus === STATUS_DELETED ? (
        <button onClick={() => handleShowModal(id)}>Remove</button>
      ) : (
        <button onClick={() => handleRemoveElement(id)}>Remove</button>
      )}
    </div>
  );
};

Todo.propTypes = {
  handleRemoveElement: PropTypes.func,
  handleAddCompleted: PropTypes.func,
  handleChangeSetTodoEditing: PropTypes.func,
  handleSetEditingText: PropTypes.func,
  handleSetEdit: PropTypes.func,
  handleSetTextEditedInTodoList: PropTypes.func,
  handleShowModal: PropTypes.func,
  todoEditing: PropTypes.number,
  completed: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.number,
};

export default Todo;
