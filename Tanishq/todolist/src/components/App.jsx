import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputForm from "./InputForm";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (inputText) => {
    setItems((prevItems) => [...prevItems, inputText]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => index !== id);
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <InputForm onAdd={addItem} />
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              item={todoItem}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
