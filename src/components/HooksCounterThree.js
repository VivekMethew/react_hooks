import React, {useState} from 'react'

function HooksCounterThree() {
    
    const [name, setName]=useState({firstName:'',lastName:''})
    return (
        <form>
            <h1 className="text-center font-weight-bold text-uppercase">Username</h1>
            <div className="form-group">
                <input type="text"
                value={name.setName}
                onChange={e => setName({...name, firstName:e.target.value})}
                className="form-control"
                placeholder="firstname"
                />
            </div>
            <div className="form-group">
                <input type="text"
                value={name.setName}
                onChange={e => setName({...name, lastName:e.target.value})}
                className="form-control"
                placeholder="lastname"
                />
            </div>
            
            <h2 className="text-info h4">Frist Name : {name.firstName}</h2>
            <h2 className="text-info h4">Last Name : {name.lastName}</h2>
          

        </form>
    )
}

export default HooksCounterThree
