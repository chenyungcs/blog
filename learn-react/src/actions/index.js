/**
 * index
 * @author    : yunchen
 * @createdAt : 09/03/2018
 */
import { createStore, combineReducers } from 'redux'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const VISIBLE_TODO_FILTER = 'VISIBLE_TODO_FILTER'

export function addTodo (text) {
  return {type: ADD_TODO, text}
}

export function toggleTodo (index) {
  return {type: TOGGLE_TODO, index}
}

export function visibleTodo (filter) {
  return {type: VISIBLE_TODO_FILTER, filter}
}

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return [
        ...state.map((todo, index) =>
          (index === action.index)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      ]
    default:
      return state
  }
}

function visibleTodoFilter (state = 'SHOW_ALL', action) {
  switch (action.type) {
    case VISIBLE_TODO_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibleTodoFilter
})

export default createStore(todoApp)

