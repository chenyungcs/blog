/**
 * menu
 * @author    : yunchen
 * @createdAt : 28/02/2018
 */
import React from 'react'
import { Menu, Layout, Icon } from 'antd'

const { Sider } = Layout

export default function (props) {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
