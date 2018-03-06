/**
 * Search
 * @author    : yunchen
 * @createdAt : 06/03/2018
 */
import React, { Component } from 'react'

export default class Search extends Component {
  componentDidMount () {
    if (this.input) {
      this.input.focus()
    }
  }

  render () {
    const {
      value,
      onChange,
      onSubmit,
      children = '搜索'
    } = this.props

    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          ref={(node) => (this.input = node)}
        />
        <button type="submit">
          {children}
        </button>
      </form>
    )
  }
}

