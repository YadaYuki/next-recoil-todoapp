import { useRecoilValue } from 'recoil'
import { todosCountState } from '../store/todo'

const Counter = () => {
    const todosCount = useRecoilValue(todosCountState)
    return <div>残りのタスク数:{todosCount}</div>
}
export default Counter
