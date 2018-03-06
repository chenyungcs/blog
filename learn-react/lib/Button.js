/**
 * Button
 * @author    : yunchen
 * @createdAt : 06/03/2018
 */
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.oneOf(['smaller', 'normal', 'large']), // 枚举
  children: PropTypes.node
}

Button.defaultProps = {
  className: 'button-link button-active'
}

export default Button
