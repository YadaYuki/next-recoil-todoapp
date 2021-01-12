import { useRecoilValue } from 'recoil'
import { todosState, todosCountState } from '../src/store/store'
import TodoItem from '../src/component/todo-item'
import TodoCreater from '../src/component/todo-creater'

export default function TodoApp() {
    const todos = useRecoilValue(todosState)
    const todosCount = useRecoilValue(todosCountState)
    return (
        <div>
            <h3>{todosCount}</h3>
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
