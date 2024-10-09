import groceryData from "./groceryData";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useId } from "react";

export default function GroceryList () {
    
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [selected, setSelected] = useState([]);
    let preSubtotal = subtotal;
    let preTotal = total;

    // Everything inside here happens when a box is checked
    function handleChange(i) {

        const checkedItems = selected;
        const item = groceryData[i];

        if (!checkedItems.includes(item)) {
            checkedItems.push(item);
            preSubtotal += item.price; 
            preTotal += item.price + (item.price * item.taxRate);
        }
        else if (checkedItems.includes(item)) {
            checkedItems.splice(checkedItems.indexOf(item), 1);
            preSubtotal -= item.price; 
            preTotal -= item.price + (item.price * item.taxRate);
        }

        setSelected(checkedItems);

        preSubtotal = Math.round(preSubtotal * 100)/100;
        preTotal = Math.round(preTotal * 100)/100;

        setSubtotal(preSubtotal);
        setTotal(preTotal);
        
    }
    
    return (
        <div>
            {groceryData.map((item, id) => {
                // Generates each grocery option based on array
                return (
                    <ul key={id}>
                        <label ><input type="checkbox" onChange={() => handleChange(id)} id={id} /></label>
                        <label><input name="itemCount" type="number" defaultValue={0} size={1}/> ${item.price} - {item.name}</label>
                        
                    </ul>
                );
            })}
            <div>
                <button>Clear Items</button>
                <label> Max Budget: $<input type="number" id="max" defaultValue={150} size={3}/></label>
            </div>
            <br />
            <div>Subtotal: ${subtotal}</div>
            <div>Total: ${total}</div>
            <br />

           </div>
           );
        }