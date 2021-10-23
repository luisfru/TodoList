import React, { useContext } from "react";
import PropTypes from "prop-types";

import { FilterStatus } from "../context/FilterStatus";

import { STATUS_DELETED } from "../constants/todoListStatus";

import { StyleText } from "../styles/components/Todo";

const Todo = ({
  handleRemoveElement,
  handleAddCompleted,
  handleShowModal,
  text,
  completed,
  id,
}) => {
  const filterStatus = useContext(FilterStatus);

  return (
    <div>
      <StyleText strikeThrough={completed}>{text}</StyleText>
      <button onClick={() => handleAddCompleted(id)}>Complete</button>
      {filterStatus === STATUS_DELETED ? (
        <button onClick={() => handleShowModal()}>Remove</button>
      ) : (
        <button onClick={() => handleRemoveElement(id)}>Remove</button>
      )}
    </div>
  );
};

Todo.propTypes = {
  handleRemoveElement: PropTypes.func,
  handleAddCompleted: PropTypes.func,
  handleShowModal: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.number,
};

export default Todo;
