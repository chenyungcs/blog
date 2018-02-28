/**
 * user
 * @author    : yunchen
 * @createdAt : 27/02/2018
 */
import {createStore} from 'redux'
import {INCREMENT, DECREMENT} from './types'

function counter (state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
};

export default createStore(counter)
