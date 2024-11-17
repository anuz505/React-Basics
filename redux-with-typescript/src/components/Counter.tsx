import { increment,decrement,incrementbyamount } from "../state/Slice/counterSlice";
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
    const handleIncrement = ()=>{
        const incrementamount = prompt("enter increment amount","0")
        if(incrementamount !==null){
            const amount = parseInt(incrementamount,10)
            if(!isNaN(amount)){
                dispatch(incrementbyamount(amount))
            }
            else{
                alert("please enter a valid number")
            }
        }
    }
    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <h2>{user}</h2><button onClick={handleUpdateEmail}>Update</button>
            
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={handleIncrement}>Increment by amount</button>
        </div>
    )
}
export default Counter