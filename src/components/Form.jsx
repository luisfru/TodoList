import React from "react";
import PropTypes from "prop-types";

const Form = ({ handleTypeText, handleAddToList, text }) => {
  return (
    <form>
      <input onChange={handleTypeText} value={text} />
      <button onClick={handleAddToList}>Add</button>
      <select id="TodoList">
        <option value="1">All</option>
        <option value="2">Completed</option>
      </select>
    </form>
  );
};

Form.propTypes = {
  handleTypeText: PropTypes.func,
  handleAddToList: PropTypes.func,
  text: PropTypes.string,
};

export default Form;
