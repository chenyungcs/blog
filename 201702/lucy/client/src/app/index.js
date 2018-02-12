/**
 * @flow
 * index
 * @author    : yunchen
 * @createdAt : 10/02/2018
 */
import React from 'react';
import {Button} from '../components';

type Props = {
    name: string
}

export default function App (props: Props) {
    return (
        <div>
            <Button name={'保存'}/>
            <h1>halo {props.name}</h1>
        </div>
    );
}

App.defaultProps = {name: '张三'}
