/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './src/redux/'
import { applyMiddleware, createStore } from 'redux'
import RootNavigatorWithState from './src/RootNavigator'

const store = createStore(reducers, {}, applyMiddleware(thunk))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigatorWithState />
      </Provider>
    )
  }
}
