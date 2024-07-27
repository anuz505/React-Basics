
import Student from "../prop"
function App() {
  

  return (
    <>
       <Student Name="Anuj" age = {23} Student={true} />
       <Student Name="prabin" age = {25} Student={true}></Student>
       {/* default */}
       <Student></Student>
    </>
  )
}

export default App
