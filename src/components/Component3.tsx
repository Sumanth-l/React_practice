import { useContext } from "react"
import { userContext } from "./UseState"

export default function Component3(){

    const user=useContext(userContext)

    return(
        <div className='hii'>
             <h1>component3</h1>
            <p>{user}</p>
        </div>
    )
}