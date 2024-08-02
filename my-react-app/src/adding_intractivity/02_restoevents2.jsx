export default function Button(){
    
    let count = 1;
    const handlingCount = (name) =>{
        if(count <= 3){
            console.log(`${name} have clicked me ${count} times`)
            count++
        }
        else{
            console.log(`Just stop clicking me don't you have any work youuuu whatever your name is you fking ${name}`)
        }
    }



    return(
        <button onClick={ () => handlingCount("anuz")}> Just don't bother </button>
    )
}