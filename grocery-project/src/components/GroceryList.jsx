import groceryData from "./groceryData";
import { useState } from "react";
import { useReducer } from "react";



export default function GroceryList () {
    
    // const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [checked, setChecked] = useState(
        new Array(groceryData.length).fill(false)
      );

    function handleChange(position) {
        const updatedCheckedStatus = checked.map((object, index) =>
            index === position ? !object : object
        );
        setChecked(updatedCheckedStatus);

        const totalPrice = updatedCheckedStatus.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + groceryData[index].price;
                }
                return sum;
            }, 0
        );
        setTotal(totalPrice);
    }
    return (
        <div>
            <h3>Pick your groceries: </h3>
            {groceryData.map((item, id) => {
                
                return (
                    <ul key={id}>
                        <label ><input type="checkbox" checked={checked[id]} onChange={() => handleChange(id)} name="checkbox" id={id} /><input type="number" name="quantity" defaultValue={1} size={1}/> ${item.price} - {item.name} </label>
                    </ul>
                );
            })}
       
            {/* <div>Subtotal: ${Math.round(subtotal * 100)/100}</div> */}
            <div>Total: ${Math.round(total * 100)/100}</div>
            <div>
            <label> {console.log(checked)}
                Max Budget: $<input type="number" id="max" defaultValue={150} size={3}/>
            </label>
            </div>
           </div>
           );
        }

