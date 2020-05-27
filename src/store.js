import React, { useContext, createContext } from 'react';
import { useCounterReducer, useResetReducer } from './counter/counter.reducer';
// context
const storage = createContext({
  store: { counter: null },
  dispatch: null,
});

export const Store = ({ children }) => {
  const { Provider } = storage;
  const [counter, counterDispatch] = useCounterReducer();
  const [reset, resetDispatch] = useResetReducer();

  const combinedDispatchs = [counterDispatch, resetDispatch];

  const dispatchForAll = (action) =>
    combinedDispatchs.map((dispatch) => dispatch(action));

  return (
    <Provider
      value={{
        store: { counter, reset },
        dispatch: dispatchForAll,
      }}
    >
      {children}
    </Provider>
  );
};

// hook p/ acessar a store
export const useStore = () => {
  const context = useContext(storage);

  if (typeof context === 'undefined') throw new Error('Falha ao pegar context');

  return context;
};
