import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    value: number;
}

const initialState: InitialState = {
    value: 0
};
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async(amount:number)=>{
        await new Promise((resolve)=>{
            setTimeout(resolve,5000);
            
        })
        return amount;
    }
)

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementbyAmount:(state,action: PayloadAction<number>)=>{
            state.value += action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(incrementAsync.pending,()=>{
            console.log("loading the increment. and simulating the fetch")
        }).addCase(incrementAsync.fulfilled,(state,action:PayloadAction<number>)=>{
            state.value += action.payload
        })
    }
});


export default CounterSlice.reducer;
export const { increment,incrementbyAmount, } = CounterSlice.actions;