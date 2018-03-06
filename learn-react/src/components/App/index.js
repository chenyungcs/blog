/**
 * index
 * @author    : yunchen
 * @createdAt : 06/03/2018
 */
import React, { Component } from 'react'
import { Button, Table, Search } from '../../../lib'
import fetch from 'isomorphic-fetch'

const Loading = () => (
  <div style={{padding: '0 10px'}}>Loading...</div>
)

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: '',
      page: 0,
      list: [],
      error: '',
      loading: false
    }
    this.lock = false

    this.onSearchChange = this.onSearchChange.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
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

  render () {
    const { searchTerm, list, page = 0, error, loading } = this.state

    return (
      <section className="page">
        { error
          ? <p>{error}</p>
          : <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          />
        }
        {list && <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />}
        { loading
          ? <Loading />
          : <Button onClick={() => this.fetchData(searchTerm, page + 1)}>下一页 {page + 1}</Button>
        }
      </section>
    )
  }
}

