import Form from "./form.jsx";
export default function MainForm(){

    let stats = [
        "success",
        "error",
        "submitting",
        "empty"
    ]

    return(
    <>
        {stats.map(status=>(
            <section key={status}>
                <h4>
                   Form ({status})
                </h4>
                <Form status={status}></Form>
            </section>
        ))}
    </>    
    )
}