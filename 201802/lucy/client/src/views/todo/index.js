/**
 * @flow
 * @author    : yunchen
 * @createdAt : 26/02/2018
 */
import React from 'react'
import './style.less'

type TodoType = {
    id: number,
    value: string
}
type TodoState = {
    todoList: Array<TodoType>
}
type TodoItemType = {
    list: TodoState
}


class Input extends React.Component {
  constructor (props) {
    super(props)
  }

  handleInput (e) {

  }

  render () {
    return <input {...this.props} />
  }
}

class TodoInput extends React.Component {
    static defaultProps = {
      value: '',
      placeholder: 'todo now'
    }

    constructor (props) {
      super(props)

      this.state = {
        value: props.value
      }
    }

    handleInput (e) {
      this.setState({
        value: e.target.value
      })
    }

    handleAdd () {
      if (this.state.value) {
        this.props.addTodo(this.state.value)
        this.setState({
          value: ''
        })
      }
    }

    render () {
      return (
        <section className="todo-search-wrapper">
          {/* <i className="todo-search-icon iconfont icon-yigouxuan1"></i> */}
          <form onSubmit={event => event.preventDefault()}>
            <input className="todo-search-input"
              placeholder={this.props.placeholder}
              value={this.state.value} onChange={this.handleInput.bind(this)}/>

            <button onClick={this.handleAdd.bind(this)}>Add</button>
          </form>
        </section>
      )
    }
}

function TodoList (props: TodoItemType) {
  const nodeList = props.list.map(item => {
    return (
      <li key={item.id}>
        {/* <i className="iconfont icon-weigouxuan1"></i> */}
        {item.value}
      </li>
    )
  })

  return (
    <section className="todo-list-wrapper">
      <ul>
        {nodeList}
      </ul>
    </section>
  )
}
function TodoTool (props) {
  return <section>{props.total}</section>
}

export default class Todo extends React.Component<TodoType, TodoState> {
  constructor (props) {
    super(props)

    this.state = {
      todoList: []
    }
  }

  addTodo (value) {
    var list = this.state.todoList
    list.push({
      value,
      checked: false,
      id: list.length + 1
    })

    this.setState(list)
  }

  render () {
    return (
      <section className={'todo'}>
        <header>Todo</header>
        <section>
          <TodoInput addTodo={this.addTodo.bind(this)}/>
          <TodoList list={this.state.todoList}/>
          <TodoTool total={this.state.todoList.length}/>
        </section>
        <footer>
                    todo's code by yunchen
        </footer>

      </section>
    )
  }
}
