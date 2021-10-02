import React from "react";
import PropTypes from "prop-types";

import { STATUS_ALL, STATUS_COMPLETED } from "../constants/todoListStatus";

const Form = ({
  handleTypeText,
  handleAddToList,
  handleChangeFilter,
  text,
}) => {
  return (
    <form>
      <input onChange={handleTypeText} value={text} />
      <button onClick={handleAddToList}>Add</button>
      <select onChange={handleChangeFilter}>
        <option value={STATUS_ALL}>All</option>
        <option value={STATUS_COMPLETED}>Completed</option>
      </select>
    </form>
  );
};

Form.propTypes = {
  handleTypeText: PropTypes.func,
  handleAddToList: PropTypes.func,
  handleChangeFilter: PropTypes.func,
  text: PropTypes.string,
};

export default Form;
