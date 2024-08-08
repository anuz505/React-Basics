import { useState } from "react";

export default function Form(){
    const [to,setTo] = useState("Anuj")
    const [msg,setMessage] = useState("Hello!!")

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(()=>{
            alert(`You said this ${msg} to ${to}`)
        },3000)
    }
    

    return(
    <form onSubmit={handleSubmit} style={{padding: '20px', border: '1px solid #ccc', background: "black", color: "white", maxWidth: "170px"}}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
            To: {"\n"}
            <select value={to} onChange={e => setTo(e.target.value)}>
                <option value="Anuj">Anuj</option>
                <option value="Prabin">Prabin</option>
                <option value="Sushil">Sushil</option>
            </select>
        </label>
        <textarea value={msg} onChange={e => setMessage(e.target.value)} placeholder="Your message bro"></textarea>
        <button type="submit">Submit</button>
        
    </form>)
}