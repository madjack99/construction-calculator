import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { rootReducer } from './reducer';

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
