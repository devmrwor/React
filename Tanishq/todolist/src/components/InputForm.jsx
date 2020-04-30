import React, { useState } from "react";

const InputForm = (props) => {
  const [inputText, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  return (
    <div className="form">
      <input type="text" value={inputText} onChange={handleChange} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputValue("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputForm;
