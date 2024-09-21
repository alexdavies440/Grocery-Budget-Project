import groceryData from "./groceryData";
import Ledger from "./Ledger";
import { useState } from "react";


export default function GroceryList () {
    
    const [subtotal, setSubtotal] = useState(0);
    const [cart, setCart] = useState([]);
    function addItem(item) {
            setSubtotal(subtotal + item.price);
            setCart(cart => [...cart, `${item.name} - ${item.price}`]);
            console.log(cart);
    
    }
    
    return (
        <div>
            <h3>Pick your groceries: </h3>
            {groceryData.map((items, id) => {
                
                return (
                    <ul>
                        <label key={id}>
                            <button id="addButton" onClick={() => addItem(items)}>+</button> ${items.price} - {items.name}
                        </label>
                    </ul>
                );
            })}
            
            <div>Cart:</div>
            <div>
                {cart.map((line, id) => {
                return (
                    <div>
                        <ul>
                            <li key={id}>
                            <button >-</button> {line} 
                            </li>
                        </ul>
                    </div>

                );
            })}
            </div>
            <div>Subtotal: ${subtotal}</div>
            
           </div>
           );
        }

