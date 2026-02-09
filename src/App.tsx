import { useState } from 'react'
import './App.css'
import UseState from './components/UseState'
import DefualtList from './components/movie/DefualtList'

function App() {

  const[count,setCount]=useState(0)

  return (
    <>
    {/* <UseState/> */}
    <DefualtList/>  
    </>
  )
}

export default App
