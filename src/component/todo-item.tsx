interface Props {
    todo: string
}

const TodoItem:React.FC<Props> = ({ todo }) => {
    return (<p>{todo}</p>)
}

export default TodoItem