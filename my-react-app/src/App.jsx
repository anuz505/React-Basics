import List from "../List";

function App() {
  
  const fruits = [{id:1, name:"Apple", cal:95},
    {id:2, name:"Avacacdo", cal:159},
    {id:3, name:"Orange", cal:45},
    {id:4, name:"Banana", cal:105}
]
const vegetables = [
  {id:1, name:"Carrot", cal:25},
  {id:2, name:"Broccoli", cal:55},
  {id:3, name:"Spinach", cal:23},
  {id:4, name:"Potato", cal:77}
];
  return (
    <>
      {fruits.length != 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length != 0 && <List items={vegetables} category="Vegetables"/>}

    </>
  )
}

export default App
