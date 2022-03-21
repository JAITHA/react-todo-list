import React, { Component } from 'react'
import Todoitems from './Todoitems';

class Todolist extends Component {
  render() {

    const {items, clearlist, handleDelete, handleedit} = this.props

    return (
        <ul className='list-group my-5'>
        <h3 className='text-capitalize text-center'>todo list</h3>
        {items.map(item => {
            return(
                <Todoitems
                  key={item.id}
                  title={item.title}
                  handleDelete={() => handleDelete(item.id)}
                  handleedit={() => handleedit(item.id)}
                />
            );
        })}
        <button
          type='button'
          className='btn btn-danger btn-block text-uppercase mt-5'
          onClick={clearlist}
        >clear list</button>
    </ul>
    )
  }
}

export default Todolist