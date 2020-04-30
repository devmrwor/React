import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone((prevBool) => !prevBool);
  };

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.item} &nbsp;
        <span onClick={() => props.deleteItem(props.id)}>
          <i className="fa fa-trash"></i>
        </span>
      </li>
    </div>
  );
};

export default TodoItem;
