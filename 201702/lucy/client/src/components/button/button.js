/**
 * @flow
 * @author    : yunchen
 * @createdAt : 10/02/2018
 */
import React from 'react';

export type ButtonProps = {
    prefixCls: string,
    name?: string
}

export default class Button extends React.Component<ButtonProps, any> {
    // eq Button.defaultProps
    static defaultProps = {
        prefixCls: 'lucy-btn',
        name: '提交'
    }

    render () {
        return <button className={this.props.prefixCls}>{this.props.name}</button>;
    }
}


