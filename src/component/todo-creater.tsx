import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todosState } from '../store/store'

interface Props {}

const TodoCreater: React.FC<Props> = () => {
    const [inputText, setInputText] = useState('')
    const setTodos = useSetRecoilState(todosState)
    const onChange = ({ target: { value } }) => {
        if (value.length === 0) {
            alert('TODOを入力してください')
        } else {
            setInputText(value)
        }
    }
    const onClick = () => {
        if (inputText.length === 0) {
            alert('TODOを入力してください')
        } else {
            setTodos((prevTodos) => [
                ...prevTodos,
                {
                    id: prevTodos.length,
                    text: inputText,
                },
            ])
            setInputText('')
        }
    }
    return (
        <div>
            <input type="text" value={inputText} onChange={onChange} />
            <button onClick={onClick}>Add</button>
        </div>
    )
}

export default TodoCreater
