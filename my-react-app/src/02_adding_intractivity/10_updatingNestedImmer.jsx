import { useImmer } from 'use-immer';
export default function FormNestedObjectImmer(){
    
    const [person,setPerson] = useImmer({
        name:"anuj",
        age:"21",
        artwork: {
            title: 'Blue Nana',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
          }
    }) 

    function handleNameChange(event){
        setPerson(draft =>{
            draft.name = event.target.value
        })
    }
    function handletitleChange(event){
        setPerson(draft=>{
            draft.artwork.title = event.target.value
            
        })
    }
    function handleImageChange(event){
        setPerson(draft =>{
            draft.artwork.image = event.target.value
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
                <i>Title: {person.artwork.title}</i>
                
            </p>
            <img src={person.artwork.image} />
        </>
    )
}