import React, { useState } from 'react';
import Todolist from './Todolist';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const handleDelete = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  const listOfItems = () => {
    setItems((prevItems) => [...prevItems, inputList]);
    setInputList("");
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TODO List</h1>
        <input
          type="text"
          placeholder="add an item"
          onChange={itemEvents}
          value={inputList}
        />
        <button onClick={listOfItems}>+</button>
        <br />
        <ol>
          {items.map((item, index) => (
            <Todolist
              key={index}
              text={item}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
