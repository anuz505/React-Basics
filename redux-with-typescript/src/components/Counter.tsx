import { increment,decrement } from "../state/Slice/counterSlice";
import { updateEmail } from "../state/Slice/UserSlice";
import { RootState } from "../state/store";
import { useSelector,useDispatch } from "react-redux";

const Counter = ()=>{
    const count = useSelector((state:RootState)=>state.counter.value)
    const user = useSelector((state:RootState)=>state.user.email)
    const dispatch = useDispatch()
    const handleUpdateEmail = ()=>{
        const newEmail = prompt("enter new email",user)
        if(newEmail){
            dispatch(updateEmail(newEmail))
        }
    }
    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <h2>{user}</h2><button onClick={handleUpdateEmail}>Update</button>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}
export default Counter