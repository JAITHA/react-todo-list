import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap';


class Todoinput extends Component {


  render() {

    const {item, handleChange, handleSubmit, edititems, editItem} = this.props

    return (
      <div className='card card-body my-3'>
          <form onSubmit={handleSubmit}>
              {/* <div className='input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text bg-primary text-white'>
                            <i className='fas fa-book'/>
                    </div>
                </div>
                <input 
                type="text"
                className='from-control text-capitalize'
                placeholder='add todo item'
                value={item}
                onChange={handleChange}
                />
              </div> */}

              <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><i className='fas fa-book'/></InputGroup.Text>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={item}
                        onChange={handleChange}
                    />
                </InputGroup>

                <button
                type="submit"
                disabled={item ? false : true}
                className={ 
                    editItem
                    ? "btn-block btn-success mt-3"
                    : "btn btn-block btn-primary mt-3 text-uppercase"
                }
                >
                {editItem ? "edit item" : "add item"}
                 </button>

          </form>
      </div>
    )
  }
}

export default Todoinput