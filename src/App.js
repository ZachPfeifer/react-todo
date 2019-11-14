import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Drink Tab & Dew',
        completed: false
      },
      {
        id: 2,
        title: 'Do Code Monkey Stuff',
        completed: false
      },
      {
        id: 3,
        title: 'Eat Banana',
        completed: false
      },
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete TODO 
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
