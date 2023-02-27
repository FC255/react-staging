import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";
import Footer from "./components/Footer";

class App extends React.Component {

    state = {
        todos:[
            {id:'001', name:'eat', done:true},
            {id:'002', name:'sleep',done:true},
            {id:'003', name:'code', done:false}
            
        ]
    }

    updateTodo = (id,done)=>{
      const {todos} = this.state
      const newTodos = todos.map((todoObj)=>{
        if(todoObj.id === id) return {...todoObj,done}
        else return todoObj
      })
      this.setState({todos:newTodos})
    }

    addTodo = (todoObj)=>{
      const {todos} = this.state
      let newTodos = [todoObj,...todos]
      this.setState({todos:newTodos})
    }

    deleteTodo = (id)=>{
      const {todos} = this.state
      let newTodos = todos.filter((todoObj)=>{
        return todoObj.id !== id
      })
      this.setState({todos:newTodos})
    }

    checkAllTodos = (done)=>{
      const {todos} = this.state
      let newTodos = todos.map((todoObj)=>{
        return {...todoObj,done}

      })
      this.setState({todos:newTodos})
    }

    deleteAllTodos = ()=>{
      const {todos} = this.state
      let newTodos = todos.filter((todoObj)=>{
        return !todoObj.done
      })
      this.setState({todos:newTodos})
    }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap" >
          <Header addTodo = {this.addTodo}/>
          <List todos = {todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
          <Footer  todos = {todos} checkAllTodos = {this.checkAllTodos} deleteAllTodos = {this.deleteAllTodos}/>
        </div>
      </div>
    );
  }
}

export default App;
