import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import StepOnePage from './pages/StepOnePage';
import StepTwoPage from './pages/StepTwoPage';
import StepThreePage from './pages/StepThreePage';
import { store } from './store';

import './appStyle.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/step-one' component={StepOnePage} />
          <Route path='/step-two' component={StepTwoPage} />
          <Route path='/step-Three' component={StepThreePage} />
          <Redirect to='/step-one' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
