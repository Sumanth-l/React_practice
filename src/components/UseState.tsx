import {useMemo , useEffect, useState } from "react"
import { intialItems } from "./Utils";



export default function UseState(){
    const[count,setCount]=useState(0);
    const[items]=useState(intialItems)


    const selectedItems=useMemo(()=>items.find((item)=>item.isSelected),[items])

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
            <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
            <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <h1>selectedItems:{selectedItems?.id}</h1>
        </div>
    )
}