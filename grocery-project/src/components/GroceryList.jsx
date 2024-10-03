import groceryData from "./groceryData";
import { useState } from "react";
import { useReducer } from "react";
import { useId } from "react";



export default function GroceryList () {

    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [groceryList, setGroceryList] = useState([]);
    const [quantity, setQuantity] = useState(
        new Array(groceryData.length).fill(0)
    );

    function handleQuantity(e) {
        
        quantity.splice(e.target.id -1, 1, e.target.value);
        handleChange(e.target.id);
    }
    /////////////////////////////////////////////////////
    const [checked, setChecked] = useState(
        new Array(groceryData.length).fill(false)
      );

    function handleChange(position) {
        const updatedCheckedStatus = checked.map((object, index) =>
            index === position ? !object : object
        );
        setChecked(updatedCheckedStatus);

        const calculatedSubtotal = updatedCheckedStatus.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + (groceryData[index].price * quantity[index]);
                }
                return sum;
            }, 0
        );
        setSubtotal(calculatedSubtotal);

        const calculatedTotal = updatedCheckedStatus.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + groceryData[index].price + (groceryData[index].price * groceryData[index].taxRate);
                }
                return sum;
            }
        );
        setTotal(calculatedTotal);
    }

    return (
        <div>
            <h3>Pick your groceries: </h3>
            
            {groceryData.map((item, id) => {
                
                return (
                    <ul key={id}>
                        <label ><input type="checkbox" checked={checked[id]} onChange={() => handleChange(id)} id={id} /></label>
                        <label><input name="count" quantity={quantity[id]} type="number" onChange={(id) => handleQuantity(id)} defaultValue={1} size={1}/> ${item.price} - {item.name} </label>
                        
                    </ul>
                );
            })}
       
            <div>Subtotal: ${Math.round(subtotal * 100)/100}</div>
            <div>Total: ${Math.round(total * 100)/100}</div>
            
            <div>
            <label> {console.log(quantity)} 
                
                Max Budget: $<input type="number" id="max" defaultValue={150} size={3}/>
                
            </label>
            </div>
           </div>
           );
        }

