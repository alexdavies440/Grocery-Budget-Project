import groceryData from "./groceryData";
import { useState } from "react";
import { useReducer } from "react";
import { useId } from "react";



export default function GroceryList () {
    const currentCart = [];
    let subtotal = 0;
    
    // const [subtotal, setSubtotal] = useState(0);
    // const [total, setTotal] = useState(0);
    // const [cart, setCart] = useState([]);
    
    
    function handleChange(id) {
        
        if (!currentCart.includes(groceryData[id])) {
            currentCart.push(groceryData[id]);
            subtotal += groceryData[id].price;
        }
        else if (currentCart.includes(groceryData[id])) {
            currentCart.splice(currentCart.indexOf(groceryData[id]), 1);
            subtotal -= groceryData[id].price;
        }

        let sum = 0;
        for (let i = 0; i < currentCart.length; i++) {
            sum += currentCart[i].price;
        }
        
       console.log(currentCart);
       console.log(subtotal);

    }
   
    //console.log(cart);
    return (
        <div>
            
            {groceryData.map((item, id) => {
                
                return (
                    <ul key={id}>
                        <label ><input type="checkbox" onChange={() =>handleChange(id)} id={id} /></label>
                        <label><input name="count" type="number" defaultValue={0} size={1}/> ${item.price} - {item.name}</label>
                        
                    </ul>
                );
            })}

            <div>Cart: </div>
       
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

