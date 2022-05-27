import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { TodoStateInterface } from './state'
import getters from './getters'
import mutations from './mutations'

const todoModules: Module<TodoStateInterface, StateInterface> = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default todoModules
