import groceryData from "./groceryData";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useId } from "react";

export default function GroceryList () {
    
    const [subtotal, setSubtotal] = useState(0);
    const [selected, setSelected] = useState([]);
    let sum = subtotal;

    // Everything inside here happens when a box is checked
    function handleChange(i) {
        const checkedItems = selected;


        if (!checkedItems.includes(groceryData[i])) {
            checkedItems.push(groceryData[i]);
            sum += groceryData[i].price; 
        }
        else if (checkedItems.includes(groceryData[i])) {
            checkedItems.splice(checkedItems.indexOf(groceryData[i]), 1);
            sum -= groceryData[i].price; 
        }

        setSelected(checkedItems);
        sum = Math.round(sum * 100)/100;
        setSubtotal(sum);
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

            <div id="subtotal">Subtotal: {subtotal}</div>
       
            {/* <div>Total: ${Math.round(total * 100)/100}</div> */}
            
            <div>
                
            <label>
                
                Max Budget: $<input type="number" id="max" defaultValue={150} size={3}/>
                
            </label>
            </div>
           </div>
           );
        }