import { ref } from 'vue'

const useCounter = (initialValue = 5) => {
  const counter = ref<number>(initialValue)

  return {
    counter,

    increase: (): number => counter.value++,
    decrement: (): number => counter.value--

  }
}

export default useCounter
