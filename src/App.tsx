import React from 'react';
import { Provider } from 'react-redux';

import StepOnePage from './pages/StepOnePage';
import { store } from './store';

import './appStyle.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <StepOnePage />
      </div>
    </Provider>
  );
}

export default App;
