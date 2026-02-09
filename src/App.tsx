import { useState } from 'react'
import './App.css'
import UseState from './components/UseState'
import DefualtList from './components/movie/DefualtList'
import Movie from './components/movie/Movie'
import SearchQuery from './components/movie/SearchQuery'

function App() {

  const[count,setCount]=useState(0)

  return (
    <>
    {/* <UseState/> */}
    <SearchQuery/>
    </>
  )
}

export default App
