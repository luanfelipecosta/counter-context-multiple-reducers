import React, { useState } from 'react';
import Counter from './counter/counter.component';

const HomePage = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <h1>Pagina home</h1>
      <Counter increment={increment} decrement={decrement} count={count} />
    </>
  );
};

export default HomePage;
