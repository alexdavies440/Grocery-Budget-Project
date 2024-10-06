import groceryData from "./groceryData";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useId } from "react";




export default function GroceryList () {
    const list = [...groceryData];
    
    
    //let subtotal;
    const [count, setCount] = useState(0)
    const [subtotal, setSubtotal] = useState(0);
    const checkedItems = [];


    function selectItems(i) {
        if (!checkedItems.includes(groceryData[i])) {
            checkedItems.push(groceryData[i]);
            
        }
        else if (checkedItems.includes(groceryData[i])) {
            checkedItems.splice(checkedItems.indexOf(groceryData[i]), 1);
        }
        return checkedItems;
    }

    function getSubtotal(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i].price * arr[i].quantity;
        }
        return Math.round(sum * 100)/100;
    }

    

    function updateQuantity(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].quantity = 1;
        }
    }

    function handleChange(index) {

        selectItems(index);

        

        //setSubtotal(getSubtotal(checkedItems))
        
        //setCart(checkedItems);
        updateQuantity(checkedItems);
        
        console.log(checkedItems);
        //console.log(cart);       
        console.log(getSubtotal(checkedItems));
        
    }
    
    return (
        <div>
            
            {list.map((item, id) => {
                
                return (
                    <ul key={id}>
                        <label ><input type="checkbox" onChange={() => handleChange(id)} id={id} /></label>
                        <label><input name="itemCount" onChange={(e) => groceryData[id].quantity = e.target.value} type="number" defaultValue={0} size={1}/> ${item.price} - {item.name}</label>
                        
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