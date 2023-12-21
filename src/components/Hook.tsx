    import { useState } from "react"

    export const Hook:React.FC<{}>=()=>{
        let [val,setVal]=useState('')
        return <h1>
            <input type="text" onChange={(e)=>{setVal(e.target.value)}} />
            {val}
        </h1>
    }
