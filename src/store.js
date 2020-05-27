import React, { useContext, createContext } from 'react';
import { useCounterReducer } from './counter/counter.reducer';
// context
const storage = createContext({
  store: { counter: null },
  dispatch: null,
});

export const Store = ({ children }) => {
  const { Provider } = storage;
  const [counter, dispatch] = useCounterReducer();

  return (
    <Provider
      value={{
        store: { counter },
        dispatch,
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
