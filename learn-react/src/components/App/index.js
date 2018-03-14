/**
 * index
 * @author    : yunchen
 * @createdAt : 06/03/2018
 */
import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Button, Table, Search } from '../../../lib'
import store, { addTodo, toggleTodo, visibleTodo } from '../../actions'


// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(2))
store.dispatch(toggleTodo(1))
store.dispatch(visibleTodo('SHOW_ONE'))

// 停止监听 state 更新
unsubscribe()

const Loading = () => (
  <div style={{padding: '0 10px'}}>Loading...</div>
)

const withLoading = (Comp) => ({ isLoading, ...rest }) => (
  isLoading
    ? <Loading />
    : <Comp {...rest} />
)

const ButtonWithLoading = withLoading(Button)

function controller (target) {
  target.prototype.__author__ = 'yunchen'
}

@controller
export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: '',
      page: 0,
      list: [],
      error: '',
      loading: false,
      sortKey: 'NONE'
    }
    this.lock = false

    this.onSearchChange = this.onSearchChange.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
    this.onSort = this.onSort.bind(this)
  }

  fetchData (keywords = '', page = 0) {
    if (this.state.loading) { return }
    this.setState({loading: true})

    fetch(`https://hn.algolia.com/api/v1/search?query=${keywords}&page=${page}`)
      .then(resp => resp.json())
      .then(({ hits, page }) => this.setData({page, list: hits}))
      .then(() => this.setState({loading: false}))
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        })
      })
  }

  setData ({ page = 0, list = [] } = {}) {
    this.setState({
      page,
      list: [
        ...this.state.list,
        ...list
      ]
    })
  }

  componentDidMount () {
    this.fetchData()
  }

  onSearchChange (e) {
    this.setState({searchTerm: e.target.value})
  }

  onSearchSubmit (event) {
    const { searchTerm } = this.state
    this.setState({page: 0, list: []})
    this.fetchData(searchTerm)
    event.preventDefault()
  }

  onDismiss (id) {
    const isNotId = (item) => item.objectID !== id
    const updateData = this.state.list.filter(isNotId)
    this.setState({
      list: updateData
    })
  }

  onSort (sortKey) {
    this.setState({sortKey})
  }

  render () {
    const {
      searchTerm,
      list,
      page = 0,
      error,
      loading,
      sortKey
    } = this.state

    return (
      <section className="page">
        {error
          ? <p>{error}</p>
          : <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          />
        }
        {list && <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
          onSort={this.onSort}
          sortKey={sortKey}
        />
        }
        <ButtonWithLoading
          isLoading={loading}
          onClick={() => this.fetchData(searchTerm, page + 1)}
        >
          下一页 {page + 1}
        </ButtonWithLoading>
      </section>
    )
  }
}

