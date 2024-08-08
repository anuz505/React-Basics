import { useState } from "react";

export default function Mycomp(){
    
    const [name, setName] = useState("Guest")
    const updateName = () =>{
        setName("Anuj")
    }
    const [message,setMessage] = useState("Initial render")
    const updateMessage = () =>{
        setMessage("Re rendered message")
    }

    const handleClick = ()=>{
        updateMessage();
        updateName();
    }

    return(
        <div>
            <p>{message}</p>
            <p>Name: {name}</p>
            <button onClick={handleClick}>Re-render</button>
        </div>
    )
}
// here, since useState returns two values. we destructure it using arrays. and then we create a function called updateName inorder to run the setFunction in this case we have setName.

// the following code will give firstly render Guest in <p> and when we click the button it re renders and updates the state.