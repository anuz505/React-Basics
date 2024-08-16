import { useState } from "react";

export default function NewForm(){

    const [answer,setAnswer] = useState("");
    const [error,setError] = useState(null);
    const [status,setStatus] = useState("typing");
    
    async function handleSubmit(e){
        e.preventDefault();
        setStatus("submitting");
        setError(null);

        try{
            await submitForm(answer)
            setStatus("success")
        }
        catch(err){
            setStatus("error")
            setError(err)
        }
    }
    function handleInput(event){
        setAnswer(event.target.value);
    }

    function submitForm(answer){
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                let shouldErr = answer.toLowerCase() !== "anuj";
                if(shouldErr){
                    reject(new Error("You are wrong"));
                }
                else{
                    resolve();
                }
            },1500)
        })
    }


    if(status === "success"){
        return(
            <h1>You're correct</h1>
        )
    }
    return(
        <>
            <h1>Quiz</h1>
            <p>What is your father put is your name?</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInput} disabled={status === "submitting"} value={answer} />
                <button disabled={status === "submitting" || answer.length === 0}>Submit</button>
                <br />
                {status === "submitting" && (
                <>
                    <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="150px" height="150px" style={{}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </>
            )}
            {error !== null && <p>{error.message}</p>}
            </form>
        </>
    )


}