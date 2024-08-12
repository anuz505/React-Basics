import { useState } from "react";

let nextId = 3;

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList(){

    const [myList,setMylist] = useState(initialList);
    const [yourList,setYourList] = useState(initialList);

    function handleMytoogleList(artworkID,nextSeen){
        setMylist(myList.map(artwork=>{
            if(artwork.id === artworkID){
                return{...artwork,seen:nextSeen}
            }
            else{
                return artwork
            }
        }))
    }

    function handleYourtoogleList(artworkID,nextSeen){
        setYourList(yourList.map(artwork=>{
            if(artwork.id === artworkID){
                return{...artwork,seen:nextSeen}
            }
            else{
                return artwork
            }
        }))
    }


    return(
        <>
            <h1>Art Bucket List</h1>
            <h2>My Bucket List</h2>
            <ItemList 
                artworks={myList}
                onToggle={handleMytoogleList}
            />
            <h2>Your Bucket List</h2>
            <ItemList 
                artworks={yourList}
                onToggle={handleYourtoogleList}
            />
        </>
    )



    function ItemList({artworks,onToggle}){
        return(
            <ul>
                {artworks.map((artwork)=>(
                    <li key={artwork.id}>
                        <label>
                            <input type="checkbox" checked={artwork.seen}
                                    onChange={e => {onToggle(artwork.id,e.target.checked)}} />
                                    {artwork.title}
                        </label>
                    </li>
                ))}
            </ul>
        )
    }
    
}