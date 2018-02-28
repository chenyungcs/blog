/**
 * @flow
 * @author    : yunchen
 * @createdAt : 28/02/2018
 */
import React, { Component } from 'react'
import { Table } from 'antd'

export default class ActivityList extends Component <any> {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.setState({
      dataSource: [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }],
      columns: [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      }]
    })
  }

  render () {
    let {dataSource, columns} = this.state
    return <Table dataSource={dataSource} columns={columns} />
  }
}
