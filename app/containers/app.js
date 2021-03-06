import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Routes from '../routes';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Routes />
      </Provider>
    );
  }
}
