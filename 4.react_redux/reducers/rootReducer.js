import { combineReducers } from 'redux'

import {CHANGE_INPUT} from '../actions/actions'

function input(state = 'No input text detected', action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return action.text
    default:
      return state
  }
}

// Put all your specialized reducers in here
const rootReducer = combineReducers({
  input
})

export default rootReducer