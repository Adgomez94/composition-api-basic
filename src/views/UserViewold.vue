<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{errorMessage}} </h5>

  <div v-if="users.length">
    <ul>
      <li v-for="user in users" :key="user.id">
        <h4>{{user.first_name}}</h4>
        <h4>{{user.email}}</h4>
      </li>
    </ul>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina: {{currentPage}} </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useUser from '../composoble/useUser'

export default defineComponent({
  setup () {
    const {
      isLoading,
      users,
      currentPage,
      errorMessage,
      nextPage,
      prevPage
    } = useUser()

    return {
      isLoading,
      users,
      currentPage,
      errorMessage,
      nextPage,
      prevPage
    }
  }
})
</script>

<style scoped>
  h2{
    text-align: center;
    width: 100%;
  }

  div{
    display: flex;
    justify-content: center;
    text-align: center;
  }

  ul {
    width: 250px;
  }
</style>
