import {use, useEffect, useState } from "react"


export default function UseState(){
    const[count,setCount]=useState(0);


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
        </div>
    )
}