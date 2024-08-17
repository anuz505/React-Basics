import { useState } from "react";
import TodoList from "./12_TodoList.jsx";
export default function Movingdot(){
    
    const [position, setPosition] = useState({
        x:0,
        y:0
    })

    function handlePosition(event){
        setPosition({
            x: event.clientX,
            y:event.clientY
        })
    }
    return(

        <div onPointerMove={e => handlePosition(e)}
        style={{position:"relative",
                height:"95vh",
                width:"95vw"  
        }}
        >
            <TodoList />

            <div style={{
                position:"absolute",
                background: "red",
                borderRadius: "50%",
                transform: `translate(${position.x}px,${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,  
            }} />   

        </div>
    )
}