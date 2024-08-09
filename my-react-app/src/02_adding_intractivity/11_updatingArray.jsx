import { useState } from "react";

let nextid = 0;



let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];
export default function Mylist(){
    const [name,setName] = useState('')
    const [artists,setArtist] = useState(initialArtists)

    const handleKeyDown = (event) =>{
        if(event.key === "Enter"){
            handleClick(event)
        }
    }
    function handleClick(e){
        setArtist([
                ...artists,
                {id:nextid++,name:name}
            ])
    }
    return(
        <>
            <h1>Your list</h1>
            <input type="text" 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    onKeyDown={handleKeyDown} />
            <button onClick={(e)=>{
                handleClick(e)
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