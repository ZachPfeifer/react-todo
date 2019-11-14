//RCE SNIPPET

import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
    }
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: 'line-through'
    //   }
    // } else {
    //   return {
    //     textDecoration: 'none'
    //   }
    // }
  }



  render() {
    const { id, title } = this.props.todo //Alias out long prop
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          {title}
          <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}


//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

//CSS
// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  curser: 'pointer',
  float: 'right'

}

export default TodoItem
