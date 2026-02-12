import { useState } from 'react'
import './App.css'
import UseState from './components/UseState'
import DefualtList from './components/movie/DefualtList'
import Movie from './components/movie/Movie'
import SearchQuery from './components/movie/SearchQuery'
import Login from './components/Redux/Login'
import Profile from './components/Redux/Profile'
import ChangeColor from './components/Redux/ChangeColor'


function App() {

  const[count,setCount]=useState(0)

  return (
    <>
    {/* <UseState/>
    <SearchQuery/> */}
   
    <Profile/>
     <Login/>
     <ChangeColor/>
    </>
  )
}

export default App
