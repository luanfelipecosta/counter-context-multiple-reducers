import { useReducer } from 'react';

const initialState = { count: 0 };

export const CounterTypes = {
  Increment: 'COUNTER_ADD',
  Decrement: 'COUNTER_SUBTRACT',
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CounterTypes.Increment:
      return { count: state.count + 1 };
    case CounterTypes.Decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const useCounterReducer = () => useReducer(counterReducer, initialState);
