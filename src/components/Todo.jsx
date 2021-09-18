import React from "react";
import PropTypes from "prop-types";

const Todo = ({ handleRemove, handleAddCompleted, text }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={handleAddCompleted}>Complete</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

Todo.propTypes = {
  handleRemove: PropTypes.func,
  handleAddCompleted: PropTypes.func,
  text: PropTypes.string,
};
export default Todo;
