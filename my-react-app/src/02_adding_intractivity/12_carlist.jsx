import { useState } from "react";

export default function CarList(){

    const [cars, setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear())
    const [carName,setCarName] = useState("");
    const [carModel,setCarModel] = useState("");

    function handleAddCarClick(){

        const newCar = {
            
                year:carYear,
                name:carName,
                model:carModel
        }
        setCars(c => [...c, newCar])

        setCarYear(2024);
        setCarName("");
        setCarModel("");

    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event){
        setCarYear(event.target.value)
    }
    function handleCarNameChange(event){
        setCarName(event.target.value)
    }
    function handleCarModelChange(event){
        setCarModel(event.target.value)
    }
    function handleKeydown(event){
        if(event.key == "Enter"){
            handleAddCarClick(event)
        }
    }

    return(
        <>
            <h1>Car List</h1>
            <ul>
                {cars.map((c,index)=>(
                    <li key={index}>
                        {c.year} {c.name} {c.model}
                        <button onClick={()=>handleRemoveCar(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input type="number"
                    value={carYear} 
                    onChange={handleYearChange}/>
            <br />
            <input type="text" placeholder="Enter Car Name" value={carName} onChange={handleCarNameChange}onKeyDown={handleKeydown}/>
            <br />
            <input type="text" placeholder="Enter Car model" value={carModel} onChange={handleCarModelChange} onKeyDown={handleKeydown}/>
            <button onClick={handleAddCarClick} >Add Car</button>
        </>
    )
}