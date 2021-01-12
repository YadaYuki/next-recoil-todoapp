import { atom, selector } from 'recoil'

interface Todo {
    text: string
    id: number
}
const initialTodo: Todo[] = []

export const todosState = atom({
    key: 'todosState',
    default: initialTodo,
})

export const todosCountState = selector({
    key: 'todosCount', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const todos = get(todosState)
        return todos.length
    },
})
