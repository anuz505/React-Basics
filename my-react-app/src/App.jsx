import Toolbar from "./adding_intractivity/01_restoevents"
function App() {
  

  return (
    <>
      <Toolbar playsomething={()=> alert("playing something")}
                uploadsomething={()=> alert("Uploading deadpoolll")}> 

      </Toolbar>

    </>
  )
}

export default App
