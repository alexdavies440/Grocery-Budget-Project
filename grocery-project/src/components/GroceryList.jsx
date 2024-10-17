import groceryData from "./groceryData";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useId } from "react";

export default function GroceryList() {

    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [selected, setSelected] = useState([]);
    //const [list, setList] = useState([]); may use to generate list as text file or email
    
    
    const countSelector = (item) => {
        
        const [count, setCount] = useState(1);
        item.qty = count;

        
        return (
            <select onChange={(e) => {setCount(e.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>

        );
    }

    const calculateSubtotal = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i].price * arr[i].qty;
        }
        
        return Math.round(sum * 100)/100;
    }

    const calculateTotal = (arr) => {
        let sum = 0;
    
        for (let i = 0; i < arr.length; i++) {
            sum += ((arr[i].price + (arr[i].price * arr[i].taxRate)) * arr[i].qty);
        }
        
        return Math.round(sum * 100)/100;
    }

    // Everything inside here happens when a box is checked
    function handleChange(i) {
       
        const checkedItems = selected;
        const item = groceryData[i];
        
        if (!checkedItems.includes(item)) {
            checkedItems.push(item);
        }
        else if (checkedItems.includes(item)) {
            checkedItems.splice(checkedItems.indexOf(item), 1);
        }

        //I don't end up using this setter, but not having the selected state variable breaks the program for some reason...
        // setSelected(checkedItems);
       
        setSubtotal(calculateSubtotal(checkedItems));
        setTotal(calculateTotal(checkedItems));
    }

    return (
        <>
            <div className="columns">
                <div id="list">
                    <h3 id="instruction"  className="listHeader">Pick your groceries: </h3>
                    {groceryData.map((item, id) => {

                        return (
                            <div >
                                <ul key={id} className="listItem">
                                    <label><input className="checkbox" type="checkbox" onChange={() => handleChange(id)} id={id} /></label>
                                    <label id="itemCount"> {countSelector(item)} ${item.price} - {item.name}</label>
                                </ul>
                            </div>
                        );
                    })}
                    
                </div>
                <div id="secondColumn">
                <div>
                    <h3 className="totals">Subtotal: ${calculateSubtotal(selected)}</h3>

                    <h3 className="totals">Total: ${calculateTotal(selected)}</h3>
                </div>
                <br />
                    <h2 className="listHeader">Shopping Cart:</h2> 
                    {selected.map((selection, id) => {
                        return (
                            <div >
                                <ul>
                                    <li>{selection.name} x {selection.qty}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
                
                </div>
                <br />
                
              
        </>
    );
}