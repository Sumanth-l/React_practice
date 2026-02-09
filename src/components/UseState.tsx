import {useContext,useMemo , useEffect, useState, createContext, useRef, useReducer } from "react"
import { intialItems } from "./Utils";
import Component1 from "./Component1";




export const userContext=createContext<string>("")

const user="sumanth"

interface State{
    count:number,
    error:string | null
}

interface Action{
  type:'increment' | 'decrement'
}

function reducer(state:State,action:Action){

    const {type}=action;

    switch(type){
        default:
            return state;
    }
}

export default function UseState(){


    const[state,dispatch]=useReducer(reducer,{
        count:0,
        error:null, 
    })

    const countRef=useRef(0);

    const[count,setCount]=useState(0);
    const[items]=useState(intialItems)


    const selectedItems=useMemo(()=>items.find((item)=>item.isSelected),[items])



     const handleIncrement=()=>{
        setCount(count+1);
        countRef.current++;
        console.log(countRef)
     }

    useEffect(()=>{
    console.log("component rerendered");

    //optional return function 

    return()=>{
        console.log("iam being cleanedup")
    }
    }) //dependency array

    return(
        <div>
            <p>count : {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <h1>selectedItems:{selectedItems?.id}</h1>
            <userContext.Provider value={user}>
            <Component1/>
            </userContext.Provider>
        </div>
    )
}