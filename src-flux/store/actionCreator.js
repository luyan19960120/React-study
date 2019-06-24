import {ADD_TODOS} from './type'
import dispatcher from './dispatcher'
console.log(dispatcher)
let actionCreator = {
  addTodos(val){
    //1.构建一个actions  我们只是要actions，actions中我们打一个标记
    let actions = {
      type:ADD_TODOS,
      val
    }
    //2发送dispatcher
    dispatcher.dispatch(actions)
  }
}
export default actionCreator;