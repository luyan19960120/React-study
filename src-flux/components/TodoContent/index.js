import React, { Component } from 'react';
import store from '../../store'
console.log('store',store.getState())

//无状态组件吗，是一个纯函数，接收一个props参数
const TodoItem = (props)=>{
  console.log(props,'123')
  return <li className='list-li'>{props.name}</li>
}

class TodoContent extends Component {
  constructor(props){
    super(props)
    this.state={
      todos:store.getState().todos
    }
  }
  //渲染函数
  renderItem(){
    return this.state.todos.map(item=>{
      return <TodoItem key={item.id} name={item.name}></TodoItem>
    })
  }
  componentWillMount(){
    //获取更新的数据
    store.on('add-change',()=>{
      this.setState({
        todos: store.getState().todos
      })
    })
  }
  render() {
    return (
      <div className="todo-content">
        <ul>
          {this.renderItem()}
        </ul>
      </div>
    );
  }
}

export default TodoContent;
