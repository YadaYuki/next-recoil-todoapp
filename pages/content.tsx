import {useRecoilState} from "recoil"
import *  as store from "../src/store/store"

const Content = () => {
    const [text, setText] = useRecoilState(store.text);
    return (
    <div>
        <input onChange={(e)=>{setText(e.target.value)}}/>
        <h1>{text}</h1>
    </div>
    )
}

export default Content