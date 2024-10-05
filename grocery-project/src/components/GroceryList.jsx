import groceryData from "./groceryData";
import { useState } from "react";
import { useReducer } from "react";
import { useId } from "react";



export default function GroceryList () {
    const currentCart = [];
    let sum;
    let subtotal;
    //const [count, setCount] = useState(0)
    //const [subtotal, setSubtotal] = useState(0);
    // const [total, setTotal] = useState(0);
    // const [cart, setCart] = useState([]);
    function getSubtotal(arr) {
        sum = 0;
        for (let i = 0; i < arr.length; i++) {
            arr[i].quantity = 1;
            sum += arr[i].price * arr[i].quantity;
        }
        return sum;
    }
    
    function handleChange(index) {
        
        if (!currentCart.includes(groceryData[index])) {
            currentCart.push(groceryData[index]);
            //currentCart[idex].quantity = 1;

        }
        else if (currentCart.includes(groceryData[index])) {
            currentCart.splice(currentCart.indexOf(groceryData[index]), 1);
            //currentCart[idex].quantity = 0;
        }
        
        getSubtotal(currentCart);
       //console.log(sum);
       subtotal = getSubtotal(currentCart);
       console.log(currentCart);
       console.log(subtotal);
       
    }
    

    
    return (
        <div>
            
            {groceryData.map((item, id) => {
                
                return (
                    <ul key={id}>
                        <label ><input type="checkbox" onChange={() =>handleChange(id)} id={id} /></label>
                        <label><input name="count" type="number" defaultValue={groceryData[id].quantity} size={1}/> ${item.price} - {item.name}</label>
                        
                    </ul>
                    
                );
            })}

            <div>Cart: {}</div>
       
            <div>Subtotal: ${subtotal}</div>
            {/* <div>Total: ${Math.round(total * 100)/100}</div> */}
            
            <div>
                
            <label>
                
                Max Budget: $<input type="number" id="max" defaultValue={150} size={3}/>
                
            </label>
            </div>
           </div>
           );
        }