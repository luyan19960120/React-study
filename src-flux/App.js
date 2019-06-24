import React, { Component } from 'react';
import './App.css'
import TodoInput from './components/TodoInput/index'
import TodoContent from './components/TodoContent/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>flux</h4>
        <TodoInput/>
        <TodoContent/>
      </div>
    );
  }
}

export default App;
