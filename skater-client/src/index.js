import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter as Router} from "react-router-dom"
import { rootReducer } from "./reducers/rootReducer"
import thunk from "redux-thunk"

import App from './App';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

