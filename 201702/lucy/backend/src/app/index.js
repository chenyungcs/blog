import React, { Component } from 'react'
import { Layout, Icon, Breadcrumb } from 'antd'
import ActivityList from '../views/activities/list'
import MySider from './sider'
import './app.less'

const { Header, Content } = Layout

class App extends Component {
  state = {collapsed: false}

  toggle () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <Layout>
        <MySider collapsed={this.state.collapsed}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle.bind(this)}
            />
          </Header>
          <Breadcrumb style={{ margin: '24px 16px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ margin: '0 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <ActivityList />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
