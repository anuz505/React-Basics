import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../state/Slice/counterSlice';
import userReducer from "../state/Slice/UserSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch