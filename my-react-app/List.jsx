import propTypes from "prop-types"
function List(props){
    let itemsList = [...props.items];
     // albhabetic sorting
     itemsList.sort((a,b) => a.name.localeCompare(b.name))
    //numeric sorting
    itemsList.sort((a,b)=> a.cal - b.cal)
    const Listitems = itemsList.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.cal}</li>)
    const lowcalorie_fruits = props.items.filter(fruit => fruit.cal < 100)
    const lowcalorie = lowcalorie_fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.cal}</li>)
    return (
        <>
            <h1>{props.category}</h1>
            <ol>{Listitems}</ol>
            <h1>Low Calorie Fruits</h1>
            <ul>{lowcalorie}</ul>
        </>
    )
}

List.propTypes = {
    category  : propTypes.string,
    items : propTypes.arrayOf(propTypes.shape({id:propTypes.number, name: propTypes.string, cal: propTypes.number}))
}
List.defaultProps= {
    items:[],
    category: "Category not given"
    
} 
export default List