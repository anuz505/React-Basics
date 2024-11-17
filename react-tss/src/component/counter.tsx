import { increment,incrementbyAmount,incrementAsync } from "../state/slice"
import { RootState,AppDispatch } from "../store"
import { useDispatch, useSelector } from "react-redux"
const Counter = ()=>{
    const count = useSelector((state:RootState)=> state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    

    return(<>
    <h1>Counter</h1>
    <h2>{count}</h2>
    <button onClick={()=>dispatch(increment())}>Add</button>
    <button onClick={()=> dispatch(incrementbyAmount(10))}>Add by 10</button>
    <button onClick={()=>dispatch(incrementAsync(10))}>Add by Api simulation</button>
    </>)
}
export default Counter