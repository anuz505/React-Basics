import { useState } from "react";

export default function Colorpicker(){
    const [color,setColor] = useState("#ffffff")
    function handleColor(event){
        setColor(event.target.value)
    }
    return(
        <div style={{display:"flex",justifyContent:"center", alignItems: "center", flexDirection:"column"}}>
            <h1>Color Picker</h1>
            <div style={{background: color, width: "200px", height: "200px", textAlign: "center", alignContent: "center",borderRadius: "20px"}}>{color}</div>
            <label>
               <br /> Select Color <br /><br />
                <input type="color" onChange={handleColor}/>
            </label>
        </div>
    )
}