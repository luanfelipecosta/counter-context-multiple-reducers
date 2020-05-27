import React from 'react';
import HomePage from './home.page';
import { Store } from './store';

function App() {
  return (
    <Store>
      <div className="app">
        <HomePage />
      </div>
    </Store>
  );
}

export default App;
