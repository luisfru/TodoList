import React from "react";
import PropTypes from "prop-types";

const Todo = ({ handleRemoveElement, handleAddCompleted, text }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={handleAddCompleted}>Complete</button>
      <button onClick={handleRemoveElement}>Remove</button>
    </div>
  );
};

Todo.propTypes = {
  handleRemoveElement: PropTypes.func,
  handleAddCompleted: PropTypes.func,
  text: PropTypes.string,
};
export default Todo;
