import React, { useState } from 'react';
import Counter from './counter/counter.component';
import { useCounterReducer, CounterTypes } from './counter/counter.reducer';

const HomePage = () => {
  const [counterState, dispatch] = useCounterReducer();
  const { count } = counterState;

  const increment = () => dispatch({ type: CounterTypes.Increment });
  const decrement = () => dispatch({ type: CounterTypes.Decrement });

  return (
    <>
      <h1>Pagina home</h1>
      <Counter increment={increment} decrement={decrement} count={count} />
    </>
  );
};

export default HomePage;
