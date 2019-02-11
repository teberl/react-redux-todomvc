import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { throttle } from 'throttle-debounce';
import { loadState, saveState } from './localStorage';
import rootReducer from './reducers';
import App from './components/App';
import 'todomvc-app-css/index.css';
import './css/index.css';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

const saveThrottled = throttle(1000, () => {
  saveState(store.getState());
});

store.subscribe(saveThrottled);

render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" render={props => <App {...props} />} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
