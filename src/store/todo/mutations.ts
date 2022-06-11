import { MutationTree } from 'vuex'
import { TodoStateInterface } from './state'

import { generateId } from '@/utils'

const mutations:MutationTree<TodoStateInterface> = {
  toogleTodo: (state, id: number) => {
    const index = state.todos.findIndex(todo => todo.id === id)
    state.todos[index].completed = !state.todos[index].completed
  },
  createTodo: (state, text:string) => {
    if (text.length <= 1) return undefined

    state.todos.push({
      id: generateId(),
      completed: false,
      text
    })
  }
}

export default mutations
