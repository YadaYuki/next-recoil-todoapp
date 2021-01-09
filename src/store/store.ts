import { atom } from 'recoil'

const initialTodo:string[] = []

export const todos = atom({
  key: 'todos',
  default: initialTodo,
})
