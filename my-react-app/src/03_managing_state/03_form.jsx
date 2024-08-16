import { useState } from "react";
import "./from.css"
export default function Form(){

    const [answer,setAnswer] = useState("");
    const [error,setError] = useState(null);
    const [status,setStatus] = useState("typing");

    if(status === "success"){
        return(
            <h1>You're correct</h1>
        )
    }

    async function handleSubmit(e){
        e.preventDefault()
        setStatus("submitting");
        setError(null)
        try{
            await submitForm(answer)
            setStatus("success")
        }
        catch(error){
            setError(error)
            setStatus("error")
        }
    }

    function handleTextArea(e){
        setAnswer(e.target.value)
    }
    
    function submitForm(answer){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let ShouldErr = answer.toLowerCase() !== "anuj";
                if(ShouldErr){
                    reject(new Error("Sorry you're wrong"))
                }
                else{
                    resolve()
                }
            },1500);
        });
    }

    function handleKeyDown(event){
        if(event.key == "enter"){
            handleTextArea()
        }
    }

    return(
        <>
            <div className="card">
            <h2>Quiz</h2>
            <p>What is your father put is your name? </p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleTextArea}  onKeyDown={handleKeyDown} value={answer} disabled={status === "submitting"}></input>
                <button disabled={status === "submitting" || answer.length === 0}>Submit</button>
                {status === "submitting" && (
                <>
                    <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="150px" height="150px" style={{}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </>
                )}
                {error !== null && <p>{error.message}</p>}
            </form>
            </div>
        </>
    )



}