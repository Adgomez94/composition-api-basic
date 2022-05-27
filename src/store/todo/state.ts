import { Todos } from '@/interfaces/todos'

export interface TodoStateInterface {
  todos: Todos[]
}

function state (): TodoStateInterface {
  return {
    todos: [
      {
        id: 1,
        text: 'Recolectar las piedras del infinitos',
        completed: false
      },
      {
        id: 2,
        text: 'Piedra del alma',
        completed: true
      },
      {
        id: 3,
        text: 'Piedra del poder',
        completed: true
      },
      {
        id: 4,
        text: 'Piedra del realidad',
        completed: false
      },
      {
        id: 5,
        text: 'Conseguir nuevos secuases componentes',
        completed: false
      }
    ]
  }
}

export default state
