//es6的react的使用方式

import React, { Component } from 'react';  //react.Component
//Component是用来定义组件的   createClass（低版本）

//props验证
import PropTypes from 'prop-types';

console.log('component',Component) //打印出的是一个构造器函数

class App extends Component {
  //默认状态
  constructor(props){
    super(props)
    this.state= {
      msg: '这是es6的状态的定义'
    }
  }
  render() {
    return (
      <div className="App">
        {this.props.name}
        {this.state.msg}
      </div>
    );
  }
}
//默认属性
//原来的钩子不能使用了，es6中我们用静态属性defaultProps来定义属性
App.defaultProps = {
  name: '陆燕'
}
App.propTypes={
  name:PropTypes.string  //props.name只能是字符串
}

export default App;
