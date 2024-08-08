import { useState } from "react";

export default function FormNestedObject(){
    
    const [person,setPerson] = useState({
        name:"anuj",
        age:"21",
        artwork: {
            title: 'Blue Nana',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
          }
    }) 

    function handleNameChange(event){
        setPerson(
            {...person,
            name:event.target.value}
        )
    }
    function handletitleChange(event){
        setPerson({
            ...person,
            artwork: {...person.artwork,
                        title: event.target.value
            }
        })
    }
    function handleImageChange(event){
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                image: event.target.value
            }
        })
    }
    return(
        <>
            <label>
                Name:
                <input type="text" value={person.name} onChange={handleNameChange} />
            </label>
            <label>
                Title:
                <input type="text" value={person.artwork.title} onChange={handletitleChange}/>
            </label>
            <label>
                Image:
                <input type="text" value={person.artwork.image} onChange={handleImageChange}/>
            </label>
            <p>
               Name: {person.name}
                <br />
                <br />
                Title: {person.artwork.title}
                
            </p>
            <img src={person.artwork.image} />
        </>
    )
}