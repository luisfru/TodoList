import React from "react";
import PropTypes from "prop-types";

// import Todo from "./Todo"; //por alguna razon aqui me borra todo
const Form = ({ handleTypeText, handleAddToList }) => {
  return (
    <form>
      <input onChange={handleTypeText} />
      <button onClick={handleAddToList}>Add</button>
      <select id="TodoList">
        <option value="1">All</option>
        <option value="2">Completed</option>
      </select>
      {/* <Todo /> */}
    </form>
  );
};

Form.propTypes = {
  handleTypeText: PropTypes.func,
  handleAddToList: PropTypes.func,
};
export default Form;
