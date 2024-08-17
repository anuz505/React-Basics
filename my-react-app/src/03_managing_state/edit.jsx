import { useState } from "react";

export default function Editform(){

    const [isEditing,setisEditing] = useState(false);
    const [firstName,setFirstName] = useState("Anuj");
    const [lastName,setLastName] = useState("Bhandari");

    let editHtml = (
        <>  
            <h1>First Name:</h1>
            <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            <br />
            <h1>Last Name: </h1>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </>


    )
    let saveHtml = (
        <>
            <h1>First Name:</h1>
            <p>{firstName}</p>
            <br />
            <h1>Last Name: </h1>
            <p>{lastName}</p>
        </>
    )
    return(
        <>
            <form onSubmit={(e)=>{
                e.preventDefault();
                setisEditing(!isEditing);
            }}>
                <label>
                    {isEditing ? editHtml :saveHtml }
                </label>
                <button type="submit">{isEditing ? "save" : "edit"}</button>
                
                <p>Your Fullname: <i>{firstName} {lastName}</i></p>

            </form>
        </>
    )


}