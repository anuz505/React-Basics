import { useState } from "react";

export default function Mycomponent(){
    
    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState(1);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState();
    const [shipping,setShipping] = useState("Delivery");
    function handleName(event){
        setName(event.target.value)
    }
    function handleQuantity(event){
        setQuantity(event.target.value)
    }
    function handleComment(event){
        setComment(event.target.value)
    }
    function handlePayment(event){
        setPayment(event.target.value)
    }
    function handleShipping(event){
        setShipping(event.target.value)
    }

    return(
        <>
            <h1>Form</h1>
            <h4>Name</h4>
            <input type="text" value={name} onChange={handleName} placeholder="Enter your name"/>
            <h4>Quantity</h4>
            <input type="number" value={quantity} onChange={handleQuantity} />
            <h4>Comments</h4>
            <textarea value={comment} onChange={handleComment}></textarea>
            <h4>Payment Methods</h4>
            <select value={payment} onChange={handlePayment}>
                <option value="">Select Option</option>
                <option value="Visa">Visa</option>
                <option value="Cash">Cash on Delivery</option>
                <option value="Esewa">Esewa</option>
            </select><br />
            <h4>Shipping</h4>
            <label>
                <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShipping}
                />
                Delivery
            </label>
            <label>
                <input type="radio" value="Pick up"
                        checked={shipping === "Pick up" }
                        onChange={handleShipping}
                />
                Pick up
            </label>
            <h1>Your Info</h1>
            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Commnets: {comment}</p>
            <p>Payment Method: {payment}</p>
            <p>Shipping: {shipping}</p>

        </>
    )
}