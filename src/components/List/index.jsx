import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos, updateTodo,deleteTodo} = this.props
    return (
      <div>
        <ul className='todo-main'>
            {
                todos.map((todo)=>{ 
                    return <Item key={todo.id} {...todo} updateTodo ={updateTodo} deleteTodo={deleteTodo}/>
                    // return <Item key={todo.id} name = {todo.name} done = {this.done}/>
                })
            }
            
        </ul>
      </div>
    )
  }
}
