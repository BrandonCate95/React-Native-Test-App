import { combineReducers } from 'redux'
import {
  ADD_COUNT,
  SUBTRACT_COUNT
} from '../actions'

const counter = (state = 0, action) => {
  switch(action.type){
    case ADD_COUNT:
      return state + 1
    case SUBTRACT_COUNT:
      return state - 1
    default:
      return state  
  }
}

export default combineReducers({
  counter
  //add any other reducer if need be
})