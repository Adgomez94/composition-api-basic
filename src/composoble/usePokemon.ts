import { ref } from 'vue'
import { Pokemon } from '@/interfaces/pokemon'
import axios from 'axios'

const usePokemon = (pokemonId = 1) => {
  const isLoading = ref<boolean>(false)
  const pokemon = ref<Pokemon>()
  const errorMessage = ref<string>('')

  const searchPokemon = async (id:number) => {
    if (!id) return
    isLoading.value = true
    pokemon.value = undefined

    try {
      const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      pokemon.value = data
      errorMessage.value = ''
    } catch (error) {
      errorMessage.value = 'No se pudo cargar ese pokemon'
    }
  }

  searchPokemon(pokemonId)

  return {
    isLoading,
    pokemon,
    errorMessage,
    searchPokemon
  }
}

export default usePokemon
