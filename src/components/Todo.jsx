import React from "react";
import PropTypes from "prop-types";

import { STATUS_COMPLETED } from "../constants/todoListStatus";

import { StyleText } from "../styles/components/Todo";

const Todo = ({
  handleRemoveElement,
  handleAddCompleted,
  text,
  index,
  status,
  id,
}) => {
  return (
    <div>
      <StyleText strikeThrough={status === STATUS_COMPLETED}>{text}</StyleText>
      <button onClick={() => handleAddCompleted(id)}>Complete</button>
      <button onClick={() => handleRemoveElement(id)}>Remove</button>
    </div>
  );
};

Todo.propTypes = {
  handleRemoveElement: PropTypes.func,
  handleAddCompleted: PropTypes.func,
  text: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.number,
};

export default Todo;
