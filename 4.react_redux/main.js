import './stylesheets/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

import rootReducer from './reducers/rootReducer'
import ResultsPage from './components/ResultsPage'

const mapStateToProps = state => state // We are just going to map state directly - no custom modifications
const mapDispatchToProps = dispatch => {return {dispatch: dispatch}} // Let's just pass dispatch directly to ResultsPage
const ConnectedResultsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsPage)

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedResultsPage />
  </Provider>,
  document.getElementById('content')
)