import { useState } from "react";

let initalCounters = [0,0,0];

export default function Counterlist(){

    const [counters,setCounter] = useState(initalCounters)

    function handleIncrementClick(index){
        const nextCounter = counters.map((c,i)=>{
            if(i===index){
                return c + 1
            }
            else{
                return c
            }
        })
        setCounter(nextCounter)
    }


    return(
        <ul>
            {counters.map((c,i)=>(
                <li key={i}>
                    {c}
                    <button onClick={()=>{handleIncrementClick(i)}}>Add</button>
                </li>
            ))}
        </ul>
    )
}