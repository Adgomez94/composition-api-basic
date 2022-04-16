<template>
  <h1>Buscar pokemon: {{pokemonId}} </h1>
  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Numero de pokemon"
      v-model="pokemonId"
      >
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script lang="ts">
import { defineComponent, onActivated, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const router = useRouter()
    const pokemonId = ref<number>(1)
    const txtSearchId = ref()

    onActivated(() => {
      // txtSearchId.value.focus()
      // xtSearchId.value.select()
    })

    return {
      pokemonId,

      onSubmit: () => {
        router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
      }
    }
  }
})
</script>

<style>

</style>
