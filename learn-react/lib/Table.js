/**
 * Table
 * @author    : yunchen
 * @createdAt : 06/03/2018
 */
import React, { Component } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SORTS } from '../src/constants'

const isSearched = searchTerm => item => item.objectID

const Sort = ({ sortKey, activeSortKey, onSort, children }) => {
  const sortClass = classNames(
    'button-inline',
    {'button-active': sortKey === activeSortKey}
  )

  return (
    <Button
      className={sortClass}
      onClick={() => onSort(sortKey)}
    >
      {children}
    </Button>
  )
}

export default class Table extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired, // 组合类型
    pattern: PropTypes.string,
    sortKey: PropTypes.string,
    onDismiss: PropTypes.func,
    onSort: PropTypes.func
  }

  static defaultProps = {
    list: [],
    sortKey: 'NONE'
  }

  render () {
    const { list, pattern, onDismiss, onSort, sortKey } = this.props

    return (
      <section>
        <ul className="table">
          <li className="table-header">
            <span style={{width: '40%'}}>
              <Sort sortKey={'TITLE'} activeSortKey={sortKey} onSort={onSort}>title</Sort>
            </span>
            <span style={{width: '30%'}}>
              <Sort sortKey={'AUTHOR'} activeSortKey={sortKey} onSort={onSort}>author</Sort>
            </span>
            <span style={{width: '10%'}}>
              <Sort sortKey={'COMMENTS'} activeSortKey={sortKey} onSort={onSort}>comments</Sort>
            </span>
            <span style={{width: '10%'}}>
              <Sort sortKey={'POINTS'} activeSortKey={sortKey} onSort={onSort}>points</Sort>
            </span>
            <span style={{width: '10%'}}>
              Archive
            </span>
          </li>
          {SORTS[sortKey](list).filter(isSearched(pattern)).map((item, index) => (
            <li key={item.objectID} className="table-row">
              <span style={{width: '40%'}}>
                <a href={item.url}>{item.title || '无'}</a>
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
