import { useState } from "react";
import {sculptureList} from "./05_data.js";

export default function Gallery(){
    const [index, setIndex]  = useState(0)
    
    const handleindex = () => {
        if(index >= sculptureList.length -1){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }
    }
    let sculture = sculptureList[index]
    return(
        <div>
            <h1>{sculture.name}</h1>
            <h2>{sculture.artist}</h2>
            <p>{sculture.description}</p>
            <img src={sculture.url} alt={sculture.alt} />
            <h2>{index} of {sculptureList.length}</h2>
            <button onClick={handleindex}>Next</button>
        </div>
    )
}