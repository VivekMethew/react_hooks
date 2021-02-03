import React, {useState, useEffect} from 'react'

function IntervalHooksCounter() {
    const initialState = 0
    const [count, setCount] = useState(initialState)

    const tick = ()=>{
        setCount(count + 1)
    }

    useEffect(() => {
     const interval = setInterval(tick,100)

     return ()=>{
         clearInterval(interval)
     }
    },[])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHooksCounter
