import React ,{useState,useEffect} from 'react'

function HooksCounterOne() {
    const initialState = 0
    const [count, setCount] = useState(initialState)
    
    useEffect(()=>{
        document.title = `you click ${count} times` 
    })
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Click Count</button>
            <h1>{count}</h1>
        </div>
    )
}

export default HooksCounterOne
