import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import { FilterStatus } from "../context/FilterStatus";

import { STATUS_DELETED } from "../constants/todoListStatus";

import { StyleText } from "../styles/components/Todo";

const Todo = ({
  handleRemoveElement,
  handleAddCompleted,
  handleSetTextEditedInTodoList,
  handleShowModal,
  text,
  completed,
  id,
}) => {
  const [edit, setEdit] = useState(false);
  const [textEdited, setTextEdited] = useState(text);

  const filterStatus = useContext(FilterStatus);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSetEdit = (id, textEdited) => {
    setEdit(false);
    handleSetTextEditedInTodoList(id, textEdited);
  };

  const handleSetTextEdited = (event) => {
    setTextEdited(event.target.value);
  };

  if (edit) {
    return (
      <div>
        <input value={textEdited} onChange={handleSetTextEdited} />
        <button onClick={() => handleSetEdit(id, textEdited)}>Save</button>
      </div>
    );
  }

  return (
    <div>
      <StyleText strikeThrough={completed}>{text}</StyleText>
      <button onClick={handleEdit}>Edit</button>
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
  handleSetTextEditedInTodoList: PropTypes.func,
  handleShowModal: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.number,
};

export default Todo;
