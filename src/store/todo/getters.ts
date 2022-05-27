import { GetterTree } from 'vuex'
import { TodoStateInterface } from './state'
import { StateInterface } from '../index'

const getters: GetterTree<TodoStateInterface, StateInterface> = {
  pendingTodo: (state, getters, rootState) => state.todos.filter(todo => !todo.completed),
  allTodo: (state) => state.todos,
  completedTodo: (state) => state.todos.filter(todo => todo.completed),

  getTodosByTab: (_, getters) => (currentTab:string) => {
    switch (currentTab) {
      case 'pending': return getters.pendingTodo
      case 'all': return getters.allTodo
      case 'completed': return getters.completedTodo
    }
  }

}

export default getters
