//node.js 遵循Common.js规范
// const EventEmitter = require('events').EventEmitter

import { EventEmitter } from 'events'
import state from './state'

let store = {
  state,
  ...EventEmitter.prototype,
  getState(){
    return this.state
  }
}

export default store;
// module.exports = store