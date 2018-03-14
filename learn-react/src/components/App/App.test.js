/**
 * App.test
 * @author    : yunchen
 * @createdAt : 06/03/2018
 */
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'
import { Button } from '../../../lib'

Enzyme.configure({adapter: new Adapter()})

describe('App', () => {
  it('render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  // 快照测试
  test('has a void snapshot', () => {
    const component = renderer.create(<App />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Button', () => {
  const props = {
    className: 'btn'
  }

  const element = shallow(<Button {...props}>搜索</Button>)

  it('text is "搜索"', () => {
    expect(element.text()).toBe('搜索')
  })

  it('className is "btn"', () => {
    expect(element.is('.btn')).toBe(true)
  })

  it('type is button', () => {
    expect(element.is('button[type="button"]')).toBe(true)
  })
})
