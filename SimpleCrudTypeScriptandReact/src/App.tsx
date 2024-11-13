import React, { useState } from 'react';
import { ItemProvider } from './Context/ItemContext';
import ItemForm from './Components/ItemForm'
import ItemList from './Components/ItemList';
import { Item } from './Types/items';

const App: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  return (
    <ItemProvider>
      <div className="App">
        <h1>CRUD App with TypeScript, Context API, and Reducers</h1>
        <ItemForm currentItem={currentItem} setCurrentItem={setCurrentItem} />
        <ItemList setCurrentItem={setCurrentItem} />
      </div>
    </ItemProvider>
  );
};

export default App;
