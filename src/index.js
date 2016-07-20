import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import thunk from 'redux-thunk';

import App from './containers/App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}
