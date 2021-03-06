//rce quick format

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {

  state = {
    description: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value }); //Looks for change in Add Todo Input (looks at name or value)

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.description)
    this.setState({ description: '' })
  }

  //Add Todo
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='description'
          placeholder='Add Todo...'
          style={{ flex: '10', padding: '5px' }}
          value={this.state.description}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
