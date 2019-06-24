## flux-vuex-redux-mobox
vue:
  MVC(VM) vuex--->只是一个工具或插件

  flux：是一个架构思想，跟MVC同级，react中用到flux，react只充当了flux的view层，
  flux依赖于事件。
    1.view  视图层（react中用组件来充当）
    2.actionCreators  动作的创建者
      作用：1. view --> actionCreators进行沟通  2.后台交互
    3.dispatcher  动作的触发者
      作用：用来接收一个actionCreators发送过来一个action，然后进行判断类型，进行数据的修改
    4.store  数据的一个存储管理者  通过事件进行数据更新
      node:
        1.事件驱动 events.EventEmitter
          EventEmitter.prototype原型 on emit
        2.I/O并发

## flux开发流程
1.首先需要一个工具： flux(工具)
  yarn add flux -S
2.首先创建一个store/index.js
  1.因为flux需要事件的支持，on  emit，events里面的EventEmitter.prototype上有提供
  2.store需要接收一个数据  state：数据
3.创建一个数据模块，然后导出 state.js
  const state = {
    todos:[{}]
  }
  export default state
4.view ---> actionCreator.js
  view: 用户操作  onKeyUp
5.创建actionCreator.js
  const actionCreator = {
    addTodo(){
      //作用： 
      1.创建action
        let actions = {
          type:ADD_TODOS  //type就是一个标记，帮助dispatcher接收action，做一个辨识
          type.js
        }
      2.发送actions给dispatcher   dispatcher.dispatch(actions)
    }
  }
6.创建一个dispather.js
  import {Dispatcher} from 'flux'
  let dispatcher = new Dispatcher()
  //dispatcher进行注册
  dispatcher.register((actions)=>{
    switch(actions.type){
      case type.ADD_TODOS:
        //用户操作
        // console.log(1)
        break;
        default:
          break;
    }
  })
  export default dispatcher
7.store---> view 更新
  通过事件驱动
  store.on('eventName',()=>{
    状态的更改
  })
  store.emit('eventName)
  问题？往哪里写？
    componentWillMount(){
      //提供组件挂载前最后一次修改数据的机会
    }