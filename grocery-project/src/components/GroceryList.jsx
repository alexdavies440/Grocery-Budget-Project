import groceryData from "./groceryData";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useId } from "react";

export default function GroceryList () {
    
    
    const checkedItems = [];
    const [subtotal, setSubtotal] = useState(getSubtotal(checkedItems));

    // Anything not contained in array will be added when checked, 
    //anything already in array will be removed when (un)checked
    function selectItems(i) {
        if (!checkedItems.includes(groceryData[i])) {
            checkedItems.push(groceryData[i]);
            
        }
        else if (checkedItems.includes(groceryData[i])) {
            checkedItems.splice(checkedItems.indexOf(groceryData[i]), 1);
            
        }
        return checkedItems;
    }

    // For now just sets everything that's checked to quantity of 1
    function updateQuantity(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].quantity = 1;
        }
    }

    // Goes through array of selected items and totals up price
    function getSubtotal(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i].price * arr[i].quantity;
        }
        sum = Math.round(sum * 100)/100;
        // setSubtotal(sum);
        return sum;
    }

    // Everything inside here happens when a box is checked
    function handleChange(index) {
    
        // Select items
        selectItems(index);

        // Set quantity of each to 1
        updateQuantity(checkedItems);
        
        // Print items
        console.log(checkedItems);

        // Print subtotal
        console.log(getSubtotal(checkedItems))
             
        // const newSubtotal = getSubtotal(checkedItems);
        // setSubtotal(subtotal => getSubtotal(checkedItems));

        // setSubtotal((subtotal) => {
        //    return getSubtotal(checkedItems);
        // })

    }
    
    // useEffect(() => {
    //     console.log(subtotal);
    //   }, [subtotal]);
    
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

            <div id="subtotal">Subtotal: {getSubtotal(checkedItems)}</div>
       
            {/* <div>Total: ${Math.round(total * 100)/100}</div> */}
            
            <div>
                
            <label>
                
                Max Budget: $<input type="number" id="max" defaultValue={150} size={3}/>
                
            </label>
            </div>
           </div>
           );
        }