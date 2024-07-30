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