import { increment,decrement } from "../state/Slice/counterSlice";
import { RootState } from "../state/store";
import { useSelector,useDispatch } from "react-redux";

const Counter = ()=>{
    const count = useSelector((state:RootState)=>state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}
export default Counter