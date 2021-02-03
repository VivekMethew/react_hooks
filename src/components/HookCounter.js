import React,{useState,useEffect} from 'react'

function HookCounter() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)
    const [name,setName] = useState('')


    useEffect(() => {
        console.log('useEffect - updating document title')
     document.title=`You clicked ${count}  times`
    })

    const increamentFive = ()=>{
        for (let i = 0; i < 360; i++) {
           setCount(prevCount => prevCount+1)
        }
    }

    return (
        <div>
            <input type="text" className="form-control m-2" value={name} onChange={e=> setName(e.target.value)} placeholder="say someting..."/>
            <div class="text-light font-weight-bold p-5 bg-danger m-2 w-100">
                <h1 class="text-light font-weight-bold">{count}</h1>
                <h1 class="text-light font-weight-bold">{name}</h1>
            </div>
            <button className="btn btn-info w-100 m-2" onClick={()=>setCount(count + 1)}>Increament</button>
            <button className="btn btn-info w-100 m-2" onClick={()=>setCount(count>0? count - 1:initialCount)}>Descrement</button>
            <button className="btn btn-info w-100 m-2" onClick={()=>setCount(initialCount)}>Reset</button>
            <button className="btn btn-info w-100 m-2" onClick={increamentFive}>Increament Five</button>
        </div>
    )
}

export default HookCounter
