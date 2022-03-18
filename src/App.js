import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from './Components/Todoinput';
import Todolist from './Components/Todolist';



function App() {
  return (
    <div>
      <div className="container">
      <div className='row'>
      <Todoinput/>
      <Todolist/>
      </div>
    </div>
    </div>
    
  );
}

export default App;
