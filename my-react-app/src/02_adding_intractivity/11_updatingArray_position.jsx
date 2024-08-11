import { useState } from "react";

let initial_positions = [
    {id:0,type:"Square",x:50,y:100},
    {id:1,type:"Circle", x:100,y:100},
    {id:2,type:"Circle",x:150,y:100},
    {id:3,type:"Square",x:200,y:100}
    ]

    export default function DroppingCircles(){

        const [shapes,setShapes] = useState(initial_positions)


        function handleClick(){
            const changedPositons = shapes.map(shape =>{
                if(shape.type == "Square"){
                    return shape
                }
                else{
                    return{
                        ...shape,
                        y: shape.y + 50
                    };
                }
            })
            
            setShapes(changedPositons)
        }

        return(
            <>
                <button onClick={handleClick}>Click Me </button>
                {shapes.map(shape=>(
                    <div
                       
                        key={shape.id}
                        style={{
                            background: 'purple',
                            position: 'absolute',
                            left: shape.x,
                            top: shape.y,
                            borderRadius:
                              shape.type === 'Circle'
                                ? '50%' : '',
                            width: 20,
                            height: 20, 
                        }}
                    ></div>
                ))}
            </>
        )
    }
