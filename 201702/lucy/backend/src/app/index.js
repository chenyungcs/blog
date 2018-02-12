/**
 * index
 * @author    : yunchen
 * @createdAt : 12/02/2018
 */
import React from 'react';
import {
    Icon,
    Layout,
    Menu,
    Input,
    notification,
    message
} from 'antd';
import io from 'socket.io-client';
import './app.less';

const { Search } = Input;
const { Header, Content, Sider, Footer } = Layout;

class SideBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            msgList: []
        };

        this.searchEvent = this.searchEvent.bind(this);
    }

    style = { overflow: 'auto', height: '100vh', position: 'fixed', left: 0 };

    searchEvent (value) {
        this.socket.emit('chat message', value);
    }

    componentDidMount () {
        this.socket = io('localhost:8000');

        this.socket.on('notify client', function (msg) {
            message.success(msg);
        });

        this.socket.on('leave notify client', function (msg) {
            message.warning(msg);
        });

        this.socket.on('chat message for client', (msg) => {
            let msgList = this.state.msgList;
            msgList.push(msg);
            this.setState({ msgList });
        });
    }

    render () {
        return (<Sider style={this.style}>
            <div className="logo">
                <Search
                    placeholder="input search text"
                    onSearch={this.searchEvent}
                />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                    <Icon type="user"/>
                    <span className="nav-text">活动管理</span>
                </Menu.Item>
                {this.state.msgList.map(item => (
                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span className="nav-text">{item}</span>
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>);
    };
}

export default class App extends React.Component {
    render () {
        return (
            <Layout>
                <SideBar/>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            ...
                            <br />
                            Really
                            <br />...<br />...<br />...<br />
                            long
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />
                            content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
};
