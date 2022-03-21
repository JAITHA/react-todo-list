import {v1 as uuid} from "uuid"; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from './Components/Todoinput';
import Todolist from './Components/Todolist';
import React, { Component } from 'react'

class App extends Component {

  state = {
      items: [],
      id: uuid(),
      item:'',
      editItem: false
    
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = { 
      id: this.state.id,
      title: this.state.item
    };
    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item:"",
      id:uuid(),
      editItem: false
    }
    )
  };

  clearlist = () => {
    this.setState({
      items:[]
    })
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id);
      this.setState({
        items: filteredItems
      })
  };

  handleedit = id => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id);
    const selectedItem = this.state.items.find(item =>
      item.id === id);
      
    this.setState({
      items: filteredItems,
      item: selectedItem.title ,
      id: id,
      editItem: true
    });   
  };


  render() {
    // console.log(this.state)
    return (
      <div className="container">
      <div className='row'>
       <div className="col-10 mx-auto col-md-8 mt-5">
         <h3 className="text-capitalize text-center">Todo Input</h3>
         <Todoinput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
         />
          <Todolist
            items={this.state.items}
            clearlist={this.clearlist}
            handleDelete={this.handleDelete}
            handleedit={this.handleedit}
          />
       </div>
      </div>
    </div>
    )
  }
}

export default App

