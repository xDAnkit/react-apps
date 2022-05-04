import React from 'react'
import {useState} from "react"
import Child from "./Child"
export default function Parent() {
  const [name,setname]=useState("")
  const [count,setCount]=useState(0)
  return (<>
    <div>count:{count}</div>
    <button onClick={()=>setCount(count+1)}>increse</button>
    <input value={name} onChange={(e)=>{setname(e.target.value)}}/>
     <Child name={name}/> 
  </>
    
  )
}
