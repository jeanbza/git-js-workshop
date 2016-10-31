import {combineReducers} from 'redux'
import franc from 'franc'

import {TYPE_SOME_TEXT} from '../actions/actions'

function francResultsReducer(state = [], action) {
  switch (action.type) {
    case TYPE_SOME_TEXT:
      return franc.all(action.inputText)
    default:
      return state
  }
}

// Put all your specialized reducers in here
const rootReducer = combineReducers({
  francResultsReducer
})

export default rootReducer