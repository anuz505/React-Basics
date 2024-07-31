import PropTypes from "prop-types";

function List({ items = [], category = "Fruits" }) {
    let itemsList = [...items];

    // Combined sorting: first by name, then by calories
    itemsList.sort((a, b) => {
        const nameComparison = a.name.localeCompare(b.name);
        if (nameComparison !== 0) return nameComparison;
        return a.cal - b.cal;
    });

    const Listitems = itemsList.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.cal}</li>);
    const lowcalorie_fruits = items.filter(fruit => fruit.cal < 100);
    const lowcalorie = lowcalorie_fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.cal}</li>);

    return (
        <>
            <h1>{category}</h1>
            <ol>{Listitems}</ol>
            <h1>Low Calorie Fruits</h1>
            <ul>{lowcalorie}</ul>
        </>
    );
}

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            cal: PropTypes.number.isRequired
        })
    ).isRequired,
    category: PropTypes.string
};

export default List;

//data
// const fruits = [{id:1, name:"Apple", cal:95},
//     {id:2, name:"Avacacdo", cal:159},
//     {id:3, name:"Orange", cal:45},
//     {id:4, name:"Banana", cal:105}
// ]
// const vegetables = [
//   {id:1, name:"Carrot", cal:25},
//   {id:2, name:"Broccoli", cal:55},
//   {id:3, name:"Spinach", cal:23},
//   {id:4, name:"Potato", cal:77}
// ];