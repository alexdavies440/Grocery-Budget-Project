import groceryData from "./groceryData";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useId } from "react";

export default function GroceryList () {
    
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [selected, setSelected] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [budget, setBudget] = useState(150);
    let preSubtotal = subtotal;
    let preTotal = total;
   


    function handleBudget(event) {
        setBudget(event.target.value);
        handleOverBudget(preTotal);
    }

    function overBudget(boolean) {
        if (boolean == true) {
            document.getElementById("maxBudget").style.fontWeight = "bold";
            document.getElementById("maxBudget").style.color = "red";
            document.getElementById("max").style.color = "red";
        }
        if (boolean == false) {
            document.getElementById("maxBudget").style.fontWeight = "normal";
            document.getElementById("maxBudget").style.color = "";
            document.getElementById("max").style.color = "";
        }
    }

    function handleOverBudget(num) {
        num > (budget)? overBudget(true) : overBudget(false);  
    }

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
        
        handleOverBudget(preTotal);

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
                        <label><input id="itemCount" type="number" onChange={(e) => {console.log(e.target.value)}} defaultValue={0} size={1}/> ${item.price} - {item.name}</label>
                        
                    </ul>
                );
            })}
            <div id="maxBudget">
                <label>Max Budget: $<input type="number" id="max" name="maxVal" onChange={(e) => handleBudget(e)} defaultValue={150} size={3}/></label>
            </div>
        
            <h3>Subtotal: ${subtotal}</h3>
        
            <h3>Total: ${total}</h3>
            <br />

           </div>
           );
        }