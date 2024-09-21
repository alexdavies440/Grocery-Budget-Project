import groceryData from "./groceryData";
import Ledger from "./Ledger";
import { useState } from "react";


export default function GroceryList () {
    const [subtotal, setSubtotal] = useState(0);
    
    return (
        <div>
            <h3>Pick your groceries: </h3>
            {groceryData.map((items, id) => {
                return (
                    <ul>
                        <label key={id}>
                            <button id="addButton" onClick={() => setSubtotal(subtotal + items.price)}>+</button> ${items.price} - {items.name}
                        </label>
                    </ul>
                );
            })}
            Subtotal: ${subtotal}
           </div>
           );
        }

