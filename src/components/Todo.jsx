import React from "react";
import PropTypes from "prop-types";

import { StyleText } from "../styles/components/Todo";

const Todo = ({
  handleRemoveElement,
  handleAddCompleted,
  text,
  completed,
  id,
}) => {
  return (
    <div>
      <StyleText strikeThrough={completed}>{text}</StyleText>
      <button onClick={() => handleAddCompleted(id)}>Complete</button>
      <button onClick={() => handleRemoveElement(id)}>Remove</button>
    </div>
  );
};

Todo.propTypes = {
  handleRemoveElement: PropTypes.func,
  handleAddCompleted: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.number,
};

export default Todo;
