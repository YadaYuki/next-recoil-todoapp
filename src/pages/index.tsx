import { useRecoilValue } from 'recoil'
import { todosState, todosCountState } from '../store/todo'
import TodoItem from '../component/todo-item'
import TodoCreater from '../component/todo-creater'
import Counter from '../component/counter'
export default function TodoApp() {
    const todos = useRecoilValue(todosState)
    const todosCount = useRecoilValue(todosCountState)
    return (
        <div>
            <h1>TODO App </h1>
            <Counter />
            <TodoCreater />
            {todos.map((todoItem) => (
                <TodoItem
                    id={todoItem.id}
                    key={todoItem.id}
                    todo={todoItem.text}
                />
            ))}
        </div>
    )
}
