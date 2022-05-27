import { MutationTree } from 'vuex'
import { TodoStateInterface } from './state'

const mutations:MutationTree<TodoStateInterface> = {
  toogleTodo: (state, id: number) => {
    const index = state.todos.findIndex(todo => todo.id === id)
    state.todos[index].completed = !state.todos[index].completed
  }
}

export default mutations
