import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  handleKeyUp = (e)=>{
    if (e.keyCode !== 13) return
    if (e.target.value.trim() === ''){
      alert('input valid')
      return
    }
    const todoObj = {id: nanoid(), name:e.target.value, Tag: false}
    this.props.addTodo(todoObj)
    e.target.value = ''
  }
  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder='Please input a todo mission, press enter to add to list'/>
      </div>
    )
  }
}
