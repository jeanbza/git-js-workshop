import { combineReducers } from 'redux'
import franc from 'franc'

import {CHANGE_INPUT_VALUE} from '../actions/actions'

function inputValue(state = 'No input text detected', action) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return action.inputValue
    default:
      return state
  }
}

function francResults(state = [], action) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      const whitelist = ['spa', 'por', 'fra', 'eng', 'rus', 'swe', 'afr', 'fin', 'dan', 'deu', 'nld']
      const results = franc.all(action.inputValue, {whitelist: whitelist})

      return results
    default:
      return state
  }
}

// Put all your specialized reducers in here
const rootReducer = combineReducers({
  inputValue,
  francResults
})

export default rootReducer