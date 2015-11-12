import React from 'react'
import ReactDOM from 'react-dom'

import { Provider, connect } from 'react-redux'
import { bindActionCreators, combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import someReducer from './reducers/someReducer'
import MainContent from './components/MainContent'
import * as AllActions from './actions'

const allReducers = {
  someReducer
}

// Ignore me
const store = function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    thunk
  )(createStore)

  const store = createStoreWithMiddleware(combineReducers(allReducers), initialState)

  return store
}()

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AllActions, dispatch)
}

function mapStateToProps(state) {
  return {}
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(MainContent)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('content')
)
