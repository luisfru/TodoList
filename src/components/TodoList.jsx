import React, { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleTypeText = (event) => {
    setText(event.target.value);
  };
  const handleAddToList = () => {
    setList([...list, text]);
  };

  const handleRemoveElement = (elementIndex) => {
    setList(
      list
        .slice(0, elementIndex)
        .concat(list.slice(elementIndex + 1, list.length))
    );
  };
  return (
    <div>
      <input onChange={handleTypeText} />
      <button onClick={handleAddToList}>Add</button>
      <div>
        {list.map((element, index) => (
          <div key={index}>
            {element}
            <button>Complete</button>
            <button onClick={() => handleRemoveElement(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
