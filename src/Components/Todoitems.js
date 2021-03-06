import React, { Component } from 'react'

class Todoitems extends Component {

  render() {

    const { title, handleDelete, handleedit} = this.props;

    return (
        <li className='list-group-item text-capitalize d-flex 
        justify-content-between my-2'>
        <h6>{title}</h6>
        <div className='todo-icon'>
            <span className='mx-2 text-success' onClick={handleedit}>
                <i className='fas fa-pen'/>
            </span>
            <span className='mx-2 text-danger' onClick={handleDelete}>
                <i className='fas fa-trash'/>
            </span>
        </div>
        </li>
    )
  }
}

export default Todoitems