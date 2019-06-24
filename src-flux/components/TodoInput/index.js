import React, { Component } from 'react';
import actionCreator from './../../store/actionCreator'
import store from './../../store/index'
class Template extends Component {
  keyup(e){
    if(e.keyCode === 13){
      let val = this.el.value
      actionCreator.addTodos(val)
      store.emit('add-change')
    }
  }
  render() {
    return (
      <div className="todo-input">
        <input 
          type='text' 
          placeholder='请输入'
          onKeyUp={this.keyup.bind(this)}
          ref={el => this.el = el}/>
        <input type='button' value='提交'/>
      </div>
    );
  }
}

export default Template;
