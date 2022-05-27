import { createStore } from 'vuex'

import todoModules from './todo'
import { TodoStateInterface } from './todo/state'

export interface StateInterface {
  todo: TodoStateInterface
}

export default createStore<StateInterface>({

  modules: {
    todo: todoModules
  }
})
