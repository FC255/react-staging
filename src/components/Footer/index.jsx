import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleTotalChecked= (e)=>{
    this.props.checkAllTodos(e.target.checked)
  }
  handleClear = ()=>{
    this.props.deleteAllTodos()
  }
  render() {
    const {todos} = this.props
    const todoCount = todos.reduce((pre,current)=>{return pre + (current.done? 1 : 0)}, 0)
    return (
      <div className='todo-footer'>
        <label >
            <input type="checkbox" checked = {todoCount === todos.length && todos.length!==0 ? true : false} onChange = {this.handleTotalChecked}/>
        </label>
        <span>
        <span>Completed: {todoCount}</span> / All : {todos.length}
        </span>
        <button onClick = {this.handleClear} className='btn btn-danger'>Clear all missions</button>
      </div>
    )
  }
}
