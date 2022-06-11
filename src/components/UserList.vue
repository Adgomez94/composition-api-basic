<template>
  <!-- <ul>
      <li v-for="user in users" :key="user.id">
        <h1>Hola mundo</h1>
      </li>
    </ul> -->
    <slot
      v-for="user in users"
      :key="user.id"
      :user="user"></slot>
</template>

<script lang="ts">
import { DataEntity } from '@/interfaces/request'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    users: {
      type: Array as PropType<DataEntity[]>
    }
  }

})
</script>

<style>
ul {
  list-style: none;
}
</style>
