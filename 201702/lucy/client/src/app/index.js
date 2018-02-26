/**
 * @flow
 * index
 * @author    : yunchen
 * @createdAt : 10/02/2018
 */
import React from 'react';
import {Button} from '../components';
import Todo from '../views/todo';

type Props = {
    name: string
}
type ToggleType = {
    isOn?: boolean
}
type ToggleState = {
    isOn: true | false,
    name: string
}

/**
 * if test
 * @param props
 * @return {*}
 * @constructor
 */
function WarningBanner (props) {
    if (!props.warn) {
        return null;
    }

    const style = {
        background: 'yellow',
        color: '#fff'
    };

    return <div style={style}>{props.warn}</div>
}

class Toggle extends React.Component<ToggleType, ToggleState> {
    static defaultProps = {
        isOn: true
    };

    constructor (props) {
        super(props);

        this.state = {
            isOn: props.isOn,
            name: props.isOn ? '开启' : '关闭'
        };
    }

    /**
     * 切换
     * @param e
     */
    handleClick (e) {
        this.setState({
            isOn: !this.state.isOn,
            name: this.state.isOn ? '关闭' : '开启'
        });
    }

    render () {
        const {name, isOn} = this.state;
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>{name}</button>
            </div>
        );
    }
}

/**
 * 入口
 * @param props
 * @return {*}
 * @constructor
 */
export default function App (props: Props) {
    const toggle = <Toggle/>
    return (
        <div>
            {toggle}
            <Todo/>
            <h1>halo {props.name}</h1>
        </div>
    );
}

App.defaultProps = {name: '张三'}
