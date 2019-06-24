import { Dispatcher } from 'flux'
import * as type from './type'
import state from './state'
//实例化得到一个dispatcher
let dispatcher = new Dispatcher()
//注册dispatcher
dispatcher.register((actions) => {
    switch (actions.type) {
        case type.ADD_TODOS:
            //用户操作
                //store.getState().todos
                state.todos.push({
                    id: getBiggerId() + 1,
                    name: actions.val
                })
                console.log( state.todos )
            break;
    
        default:
            break;
    }
})

function getBiggerId(){
    let arr = state.todos.slice()
    if( !arr.length ) return 0
    arr = state.todos.sort((a,b) => {
        return b.id -a.id
    })
    return arr[0].id
}

export default dispatcher
