import { atom, selector } from 'recoil'

interface Todo {
    text: string
    isCompleted: boolean
    id: number
}
const initialTodo: Todo[] = []

// state
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

const deleteTodo = (prevTodos: Todo[], id: number) => {
    return prevTodos.filter((todo) => todo.id !== id)
}

// actions
export const actions = {
    deleteTodo,
}
