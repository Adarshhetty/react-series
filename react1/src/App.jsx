import { useState } from "react"


function App() {
 let [counter,setCounter]=useState(0)
 const addVal=()=>{
  if(counter<20)
  setCounter(counter+1)
 }
 const remVal=()=>{
  if(counter>0)
  setCounter(counter-1)
 }

  return (
    <>
    <h1>Counter value is:{counter}</h1>
<button onClick={addVal}>Add</button> 
<button onClick={remVal}>Remove</button>   
    </>
  )
}

export default App
