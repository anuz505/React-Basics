import {useState} from 'react';

const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];

  let nextId = 3 ;
export default function ArtisitList(){

    const [name, setName] = useState('')
    const [artists,setArtist] = useState(initialArtists)
    
    //insert at index 1
    function handleClick(){
        if (name.trim() === '') {
            return;
        }
        const insertAt = 1;

        const nextArtists = [
            ...artists.slice(0,insertAt),
            {id:nextId++, name:name},
            ...artists.slice(insertAt)
        ]
    setArtist(nextArtists)
    setName('')
    }
    const handleKeyDown = (event) =>{
        if(event.key === "Enter"){
            handleClick(event)
        }
    }
    return(
        <>
            <h1>Inspiring Sculptures </h1>
            <input type="text" 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    />
            <button onClick={handleClick}>new</button>
            <ul>
                {artists.map((artist)=>(
                    <li key={artist.id}>
                        {artist.name}
                    </li>
                ))}
            </ul>
        </>
    )
}