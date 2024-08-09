import { useState } from "react";

let nextid = 0;



export default function Mylist(){
    const [name,setName] = useState('')
    const [artists,setArtist] = useState([])

    const handleKeyDown = (event) =>{
        if(event.key === "Enter"){
            setArtist([
                ...artists,
                {id:nextid++,name:name}
            ])
        }
    }
    return(
        <>
            <h1>Your list</h1>
            <input type="text" 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    onKeyDown={handleKeyDown} />
            <button onClick={()=>{
                setArtist([
                    ...artists,
                    {id:nextid,name:name}
                ]);
            }}>
                Add
            </button>
            <ul>
                {artists.map(artist=>(
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    )
}