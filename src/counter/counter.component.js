import React from 'react';
// import {  } from './component.styled';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <input disabled value={count} />
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
