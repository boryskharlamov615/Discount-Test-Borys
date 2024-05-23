// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import RadioButtons from './components/RadioButtons';
import DiscountCode from './components/DiscountCode';
import Notes from './components/Notes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Discount App</h1>
        <RadioButtons />
        <DiscountCode />
        <Notes />
      </div>
    </Provider>
  );
};

export default App;