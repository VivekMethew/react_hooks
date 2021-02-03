import React, {useState} from 'react'

function HooksCounterFour() {
    const [items, setItems]=useState([])
    const addItem = () =>{
        setItems([...items,{
            id:items.length+1,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    
    return (
        <div>
            <button className="btn btn-info" onClick={addItem}>Add Items</button>
            <ul>
                {
                    items.map(item =>(
                        <li key={item.id}><span>ID : {item.id}</span> <br/> Value : {item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HooksCounterFour
