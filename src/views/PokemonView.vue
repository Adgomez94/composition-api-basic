<template>
  <h1 v-if="!pokemon && !errorMessage">Buscanod...</h1>
  <h1 v-else-if="errorMessage">{{errorMessage}}</h1>

  <template v-else>
    <h3> {{pokemon.name}} </h3>
    <img :src="pokemon.sprites.front_default" alt="">
    <router-link :to="{name: 'pokemon-search'}">Regresa</router-link>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '../composoble/usePokemon'

export default defineComponent({
  setup () {
    const router = useRoute()
    const vista = ref<number>()

    const { isLoading, pokemon, errorMessage, searchPokemon } = usePokemon(vista.value)

    watch(
      () => router.params.id,
      () => {
        vista.value = Number(router.params.id) as number
        searchPokemon(vista.value)
      }
    )

    onBeforeRouteLeave(() => {
      const answer = window.confirm('Esta seguro de querer salir')

      if (!answer) return false // no te deja salir
    })

    return {
      errorMessage,
      isLoading,
      pokemon
    }
  }
})
</script>
