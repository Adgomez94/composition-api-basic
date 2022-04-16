<template>
  <h1>Counter Vue</h1>
  <h3>{{counter}}</h3>
  <button @click="increase">+1</button>
  <button @click="decrement">-1</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useCounter from '@/composoble/useCounter'

export default defineComponent({
  name: 'Counter-view',

  setup () {
    const { counter, increase, decrement } = useCounter(25)

    return {
      counter, increase, decrement
    }
  }
})
</script>
