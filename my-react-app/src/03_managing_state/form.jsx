export default function Form({status}){
    if(status==="success"){
        return(
            <h1>You're Correct</h1>
        )
    }
    return(
        <form>
            <textarea disabled ={status == "submitting"} />
            <button disabled={status=="submitting" || "empty"}>Submit</button>
            {status == "error" &&
                <p className="error"> Good Guess bro</p>
            }
        </form>
    )
}