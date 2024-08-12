import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List(){
    
    const [list,setList] = useState(initialList)

    function handleReverse(){
        const newList = [...list];
        newList.reverse();
        setList(newList);
        
    }
    
    
    return(
        <>
            <button onClick={handleReverse}>Reverse</button>
            <ul>
                {list.map((element)=>(
                    <li key={element.id}>{element.title}</li>
                ))}
            </ul>
        </>
    )
}