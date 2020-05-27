import React from 'react';
// import {  } from './component.styled';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>+</button>
      <input disabled value={count} />
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
