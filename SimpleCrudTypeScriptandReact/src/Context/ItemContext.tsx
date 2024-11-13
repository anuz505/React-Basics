import {createContext,useReducer,useContext,ReactNode, Children} from "react";
import {Item} from "../Types/items.ts";

//action types
type ActionType =
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'UPDATE_ITEM'; payload: { id: number; text: string } }
  | { type: 'DELETE_ITEM'; payload: number };

//initial state
interface StateType {
    items: Item[];
}
const initialState: StateType = {
    items: []
}

//Create reducer
const itemReducer = (state:StateType,action:ActionType):StateType=>{
    switch(action.type){
        case 'ADD_ITEM':
            const newItem: Item = {
                id:Date.now(),text:action.payload
            }
            return{
                ...state, items:[...state.items,newItem]
            }
        case "UPDATE_ITEM":
            return{
                ...state, items:state.items.map((item)=> item.id === action.payload.id ? {...item,text:action.payload.text}:item)
            }
        case "DELETE_ITEM":
            return{
                ...state, items:state.items.filter((item)=> item.id !== action.payload)
            }
        default:
            return state
    }
}

//create context
const ItemContext = createContext<{state:StateType,dispatch:React.Dispatch<ActionType>}>({
    state:initialState,
    dispatch:()=>{}
})

//create provider
export const ItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(itemReducer, initialState);
  
    return (
      <ItemContext.Provider value={{ state, dispatch }}>
        {children}
      </ItemContext.Provider>
    );
  };
  // Custom Hook to Use Context
export const useItemContext = () => useContext(ItemContext);