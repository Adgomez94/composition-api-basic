<template>
  <h1>Lista de tareas de Thanos</h1>
  <h4>{{ pending.length }}</h4>

  <hr>
  <button
    @click="currentTab = 'all'"
    :class="{ 'active': currentTab === 'all' }"
    >Todos</button>
  <button
    @click="currentTab = 'pending'"
    :class="{ 'active': currentTab === 'pending' }"
    >Pendientes</button>
  <button
    @click="currentTab = 'completed'"
    :class="{ 'active': currentTab === 'completed' }"
    >Completados</button>
  <!-- <h4>Todos: {{all.length}} </h4>
  <h4>Completed: {{completed.length}} </h4> -->

  <div>
    <ul>
      <li

        v-for="todo in getTodosByTab"
        :key="todo.id"
         @dblclick="toggleTodo(todo.id)"
        :class="{ 'completed': todo.completed }">
        {{todo.text}}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTodo from '../composoble/useTodo'

export default defineComponent({

  setup () {
    const { pending, currentTab, getTodosByTab, toggleTodo } = useTodo()

    return {
      pending,
      currentTab,
      getTodosByTab,
      toggleTodo
    }
  }
  // setup () {
  //   const store = useStore()

  //   const currentTab = ref<string>('all')

  //   return {
  //     currentTab,

  //     pending: computed(() => store.getters['todo/pendingTodo']),
  //     all: computed(() => store.getters['todo/allTodo']),
  //     completed: computed(() => store.getters['todo/completedTodo']),
  //     getTodosByTab: computed(() => store.getters['todo/getTodosByTab'](currentTab.value)),
  //     toggleTodo: (id:number) => store.commit('todo/toogleTodo', id)
  //   }
  // }
})
</script>

<style scoped>

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}

</style>
