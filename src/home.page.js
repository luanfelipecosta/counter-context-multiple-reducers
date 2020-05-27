import React from 'react';
import Counter from './counter/counter.component';
import { CounterTypes } from './counter/counter.reducer';
import { useStore } from './store';

const HomePage = () => {
  const {
    store: {
      counter: { count },
      reset,
    },
    dispatch,
  } = useStore();

  const increment = () => dispatch({ type: CounterTypes.Increment });
  const decrement = () => dispatch({ type: CounterTypes.Decrement });
  const handleReset = () => dispatch({ type: CounterTypes.Reset });

  return (
    <>
      <h1>Pagina home</h1>
      <Counter increment={increment} decrement={decrement} count={count} />
      <p>{JSON.stringify(reset)}</p>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

export default HomePage;
