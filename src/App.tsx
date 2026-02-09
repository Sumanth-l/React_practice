import { useState } from 'react'
import './App.css'

function App() {

  const[count,setCount]=useState(0)

  return (
    <>
    <p>count{count}</p>
      <button onClick={()=>setCount(count+1)}>click me</button>
    </>
  )
}

export default App
