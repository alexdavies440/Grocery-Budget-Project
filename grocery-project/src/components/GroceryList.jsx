import groceryData from "./groceryData";
import { useState } from "react";



export default function GroceryList () {
    
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);
    function addItem(item) {
            setSubtotal(subtotal + item.price);
            setTotal(total + item.price + (item.price * item.taxRate))
            setCart(cart => [...cart, ` $${item.price} - ${item.name}`]);
        
    
    }
    
    function removeItem() {
       
}
    // const removeItem = (index, item) => {
    //     setCart(cart => cart.splice(index));
    //     setSubtotal(subtotal - item.price);
    // }
    return (
        <div>
            <h3>Pick your groceries: </h3>
            {groceryData.map((items, id) => {
                
                return (
                    <ul>
                        <label key={id}>
                            <button id="addButton" onClick={() => addItem(items)}>Add</button> ${items.price} - {items.name}
                        </label>
                    </ul>
                );
            })}
            
            <div>Cart:</div>
            <div>
                {cart.map((lineItem, id) => {
                return (
                    <div>
                        <ul>
                            <li key={id}>
                            <button onClick={removeItem(lineItem)}>Remove</button> {lineItem} 
                            </li>
                        </ul>
                    </div>

                );
            })}
            </div>
            <div>Subtotal: ${Math.round(subtotal * 100)/100}</div>
            <div id="total">Total: ${Math.round(total * 100)/100}</div>
            <div>
            <label>
                Max Budget: $<input type="number" id="max" defaultValue={15}/>
            </label>
            </div>
           </div>
           );
        }

