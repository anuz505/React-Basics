// function without props
function List(){
    const fruits = [{id:1, name:"Apple", cal:95},
                    {id:2, name:"Avacacdo", cal:159},
                    {id:3, name:"Orange", cal:45},
                    {id:4, name:"Banana", cal:105}
    ]
     // albhabetic sorting
     fruits.sort((a,b) => a.name.localeCompare(b.name))
    //numeric sorting
    fruits.sort((a,b)=> a.cal - b.cal)
    const Listitems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.cal}</li>)
    const lowcalorie_fruits = fruits.filter(fruit => fruit.cal < 100)
    const lowcalorie = lowcalorie_fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.cal}</li>)
    return (
        <>
            <ol>{Listitems}</ol>
            <h1>Low Calorie Fruits</h1>
            <ul>{lowcalorie}</ul>
        </>
    )
}
export default List