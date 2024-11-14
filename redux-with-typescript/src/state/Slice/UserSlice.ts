import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState{
    id:number,
    email:string
}
const initialState:UserState = {
    id:1,
    email:"abc@gmail.com"
}
const UserSlice = createSlice({
    name:"user",initialState,
    reducers:{
        updateEmail:(state,action:PayloadAction<string>)=>{
            state.email = action.payload
        }
    }
})
export default UserSlice.reducer
export const {updateEmail} = UserSlice.actions