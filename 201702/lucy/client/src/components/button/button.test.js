/**
 * button.test.js
 * @author    : yunchen
 * @createdAt : 24/02/2018
 */
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './button';
configure({ adapter: new Adapter() });

test('Button is ready', () => {
    expect(typeof Button).toBe('function');
});

test('Button default text is 提交', () => {
    const ButtonEle = shallow(<Button />);
    expect(ButtonEle.text()).toEqual('提交');
});

test('Button text is 取消', () => {
    const ButtonEle = shallow(<Button name={'取消'} />);
    expect(ButtonEle.text()).toEqual('取消');
});
