import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from 'reducers/rootReducer'
import InputArea from 'components/InputArea'
import ResultsList from 'components/ResultsList'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <InputArea />
  </Provider>,
  document.getElementById('inputArea')
)

ReactDOM.render(
  <Provider store={store}>
    <ResultsList />
  </Provider>,
  document.getElementById('resultsArea')
)