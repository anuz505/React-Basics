import React,{useState,useEffect} from "react";
import { useItemContext } from "../Context/ItemContext";
import {Item} from "../Types/items";

interface ItemFormProps{
    currentItem: Item | null;
    setCurrentItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

 const ItemForm: React.FC<ItemFormProps>=({currentItem,setCurrentItem})=>{
    const {dispatch} = useItemContext();
    const [input, setInput] = useState<string>("");
    useEffect(()=>{
        if(currentItem){
            setInput(currentItem.text);
        }
    },[currentItem])
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(currentItem){
            dispatch({type:"UPDATE_ITEM",payload:{id:currentItem.id,text:input}})
            setCurrentItem(null);
        }else{
            dispatch({type:"ADD_ITEM",payload:input})
        }
        setInput("");
    }
    return(<>
    <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Add or update" />
        <button type="submit">{currentItem ? "Update" : "Add"}</button>
    </form>
    </>)
}
export default ItemForm;