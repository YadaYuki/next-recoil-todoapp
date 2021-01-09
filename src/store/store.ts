import { atom,selector } from 'recoil'

const initialTodo:string[] = []

export const todosState = atom({
  key: 'todosState',
  default: initialTodo,
})

const todosCountState = selector({
    key: 'todosCount', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const todos = get(todosState);
      return todos.length;
    },
  });
