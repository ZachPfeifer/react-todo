import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import uuid from 'uuid'
import './App.css';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import Header from './components/layout/Header.js'
import About from './components/pages/About';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    Axios.get('https://bcw-sandbox.herokuapp.com/api/zachp/todos?_limit=10')
      .then(res => this.setState({ todos: res.data.data }))
  }


  //Toggle Complete
  markComplete = (_id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo._id === _id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete TODO 
  deleteTodo = (_id) => {
    Axios.delete(`https://bcw-sandbox.herokuapp.com/api/zachp/todos/${_id}`)
      .then(res => this.setState({
        todos:
          [...this.state.todos.filter(todo => todo._id !== _id)]
      })
      )
  }

  //Add TODO 
  addTodo = (description) => {
    Axios.post('https://bcw-sandbox.herokuapp.com/api/zachp/todos/', {
      description: description,
      completed: false
    })
      .then(res => this.setState({
        todos:
          [...this.state.todos, res.data.data]
      })
      )
  }


  //App
  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={props => (
              <React.Fragment>

                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />

                <AddTodo addTodo={this.addTodo} />

              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
