import React from 'react';
import { useItemContext } from '../Context/ItemContext'
import { Item } from '../Types/items';

interface ItemListProps {
  setCurrentItem: React.Dispatch<React.SetStateAction<Item | null>>;
}

const ItemList: React.FC<ItemListProps> = ({ setCurrentItem }) => {
  const { state, dispatch } = useItemContext();

  const handleEdit = (item: Item) => {
    setCurrentItem(item);
  };

  const handleDelete = (id: number) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  return (
    <ul>
      {state.items.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
