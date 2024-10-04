import groceryData from "./groceryData";
import { useState } from "react";
import { useReducer } from "react";
import { useId } from "react";



export default function GroceryList () {
    const currentCart = [];
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);
    

   
    /////////////////////////////////////////////////////
   
    function handleChange(item, id) {
        
        if (!currentCart.includes(groceryData[id])) {
            currentCart.push(groceryData[id]);
        }
        else if (currentCart.includes(groceryData[id])) {
            currentCart.splice(currentCart.indexOf(item), 1);
        }
       console.log(currentCart);
    }

    //console.log(cart);
    return (
        <div>
            
            {groceryData.map((item, id) => {
                
                return (
                    <ul key={id}>
                        <label ><input type="checkbox" onChange={() =>handleChange(item, id)} id={id} /></label>
                        <label><input name="count" type="number" defaultValue={0} size={1}/> ${item.price} - {item.name}</label>
                        
                    </ul>
                );
            })}

            <div>Cart: </div>
       
            {/* <div>Subtotal: ${Math.round(subtotal * 100)/100}</div>
            <div>Total: ${Math.round(total * 100)/100}</div> */}
            
            <div>
                
            <label>
                
                Max Budget: $<input type="number" id="max" defaultValue={150} size={3}/>
                
            </label>
            </div>
           </div>
           );
        }

