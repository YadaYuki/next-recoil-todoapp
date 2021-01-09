import { useSetRecoilState } from 'recoil';
import { todosState } from "../store/store"

interface Props {
    todo: string
    id:number
}

const TodoItem:React.FC<Props> = ({ todo,id }) => {
    const setTodos = useSetRecoilState(todosState);
    const onClick = () => {
        setTodos((prevTodos) => {return prevTodos.filter((todo) => todo.id !== id)});
    }
    return (<p onClick={onClick}>{todo}</p>)
}



export default TodoItem