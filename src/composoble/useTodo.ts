import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodo = () => {
  const store = useStore()

  const currentTab = ref<string>('all')

  return {
    currentTab,

    pending: computed(() => store.getters['todo/pendingTodo']),
    getTodosByTab: computed(() => store.getters['todo/getTodosByTab'](currentTab.value)),
    toggleTodo: (id:number) => store.commit('todo/toogleTodo', id)
  }
}

export default useTodo
