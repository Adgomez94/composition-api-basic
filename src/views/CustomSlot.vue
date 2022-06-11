<template>
  <h1>Aprendiendo Slot</h1>
  <button @click="openModal">Abrir Modal</button>
  <modal-comp
    title="Hola mundo"
    @on:close="closedModal"
    v-if="isOpen">
    <template #header>
      <h1>Titulo de Modal</h1>
    </template>
    <template #body>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </template>
    <template #footer>
      <button @click="closedModal">Salir</button>
    </template>
    <template v-slot:exposed="{newTitle}">
      <h2> {{newTitle}} </h2>
    </template>
  </modal-comp>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ModalComp from '@/components/ModalComp.vue'

export default defineComponent({

  components: {
    ModalComp
  },
  setup () {
    const isOpen = ref<boolean>(false)
    return {
      isOpen,
      openModal: () => (isOpen.value = true),
      closedModal: () => (isOpen.value = false)
    }
  }
})
</script>

<style scoped>

</style>
