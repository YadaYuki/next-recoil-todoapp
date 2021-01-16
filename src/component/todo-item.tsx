import { useSetRecoilState } from 'recoil'
import { actions, todosState } from '../store/todo'

interface Props {
    todo: string
    id: number
}

const TodoItem: React.FC<Props> = ({ todo, id }) => {
    const setTodos = useSetRecoilState(todosState)
    const onClick = () =>
        setTodos((prevTodos) => {
            return actions.deleteTodo(prevTodos, id)
        })
    return <p onClick={onClick}>・{todo}</p>
}

export default TodoItem
