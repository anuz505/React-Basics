import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CounterState{
    value:number
}
const initialState:CounterState ={
    value:0
}
const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        incrementbyamount:(state,action:PayloadAction<number>)=>{
            state.value += action.payload
        }
    }
})
export default CounterSlice.reducer
export const {increment,decrement,incrementbyamount} = CounterSlice.actions