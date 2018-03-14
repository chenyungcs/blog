/**
 * TodoItem
 * @author    : yunchen
 * @createdAt : 09/03/2018
 */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TodoItem = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={classNames(
      'todo-item',
      {'todo-completed': completed}
    )}
  >
    {text}
  </li>
)

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem
