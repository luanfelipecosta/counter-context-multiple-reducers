import React from 'react';
import Counter from './counter/counter.component';
import { CounterTypes } from './counter/counter.reducer';
import { useStore } from './store';

const HomePage = () => {
  const {
    store: {
      counter: { count },
    },
    dispatch,
  } = useStore();

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
