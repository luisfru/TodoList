import React from "react";

import PropTypes from "prop-types";

import { STATUS_DELETED } from "../constants/todoListStatus";

import { StyleText } from "../styles/components/Todo";

const Todo = ({
  handleRemoveElement,
  handleChangeSetTodoEditing,
  handleSetEditingText,
  handleSetEdit,
  handleAddCompleted,
  handleShowModal,
  editingText,
  todoEditing,
  filterApplied,
  text,
  completed,
  id,
}) => {
  if (todoEditing === id) {
    return (
      <div>
        <input
          type="text"
          value={editingText}
          onChange={(event) => handleSetEditingText(event.target.value)}
        />
        <button onClick={() => handleSetEdit(id)}>Save</button>
      </div>
    );
  }

  return (
    <div>
      {filterApplied === STATUS_DELETED ? (
        <>
          <StyleText strikeThrough={completed}>{text}</StyleText>
          <button onClick={() => handleShowModal(id)}>Remove</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleAddCompleted(id)}
          />
          <StyleText strikeThrough={completed}>{text}</StyleText>
          <button onClick={() => handleChangeSetTodoEditing(id, text)}>
            Edit
          </button>
          <button onClick={() => handleAddCompleted(id)}>Complete</button>
          <button onClick={() => handleRemoveElement(id)}>Remove</button>
        </>
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
  editingText: PropTypes.string,
  todoEditing: PropTypes.number,
  filterApplied: PropTypes.string,
  completed: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.number,
};

export default Todo;
