/**
 * Table
 * @author    : yunchen
 * @createdAt : 06/03/2018
 */
import React, { Component } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const isSearched = searchTerm => item => item.objectID

export const type = {name: 'Table'}

export default class Table extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired, // 组合类型
    pattern: PropTypes.string,
    onDismiss: PropTypes.func
  }

  static defaultProps = {
    list: []
  }

  render () {
    const { list, pattern, onDismiss } = this.props

    return (
      <section>
        <ul className="table">
          {list.filter(isSearched(pattern)).map((item, index) => (
            <li key={item.objectID} className="table-row">
              <span style={{width: '40%'}}>
                <a href={item.url}>{index + 1} - {item.title || '无'}</a>
              </span>
              <span style={{width: '30%'}}>{item.author}</span>
              <span style={{width: '10%'}}>{item.num_comments}</span>
              <span style={{width: '10%'}}>{item.points}</span>
              <span style={{width: '10%'}}>
                <Button
                  className="button-inline"
                  onClick={() => onDismiss(item.objectID)}
                >
                  Dismiss
                </Button>
              </span>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
