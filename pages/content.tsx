import { useState } from "react"

interface Props { }

const Content = () => {
    const [word, setWord] = useState("")
    return (
    <div>
        <input onChange={(e)=>{setWord(e.target.value)}}/>
        <h1>{word}</h1>
    </div>
    )
}

export default Content