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
}) => {
  return (
    <div>
      <StyleText strikeThrough={status === STATUS_COMPLETED}>{text}</StyleText>
      <button onClick={() => handleAddCompleted(index)}>Complete</button>
      <button onClick={() => handleRemoveElement(index)}>Remove</button>
    </div>
  );
};

Todo.propTypes = {
  handleRemoveElement: PropTypes.func,
  handleAddCompleted: PropTypes.func,
  text: PropTypes.string,
  index: PropTypes.number,
};

export default Todo;
