import React from 'react';

const Todolist = (props) => {
  return (
    <div className='todo-style'>
      <li>{props.text}</li>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default Todolist;
