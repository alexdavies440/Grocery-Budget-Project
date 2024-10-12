import groceryData from "./groceryData";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useId } from "react";

export default function GroceryList() {

    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [selected, setSelected] = useState([]);
    //const [list, setList] = useState([]); may use to generate list as text file or email
    const [budget, setBudget] = useState(150);
    let preSubtotal = subtotal;
    let preTotal = total;

    function handleBudget(event) {
        setBudget(event.target.value);
        handleOverBudget(preTotal);
    }

    function isOverBudget(boolean) {
        if (boolean == true) {
            
            // Could be really annoying => 
            // window.alert("Total exceeds budget! Consider making more money")
            document.getElementById("maxBudget").style.fontWeight = "bolder";
            document.getElementById("maxBudget").style.fontWeight = "bolder";
            document.getElementById("maxBudget").style.color = "red";
            document.getElementById("max").style.color = "red";
        }
        if (boolean == false) {
            document.getElementById("maxBudget").style.fontWeight = "bold";
            document.getElementById("maxBudget").style.fontWeight = "bold";
            document.getElementById("maxBudget").style.color = "";
            document.getElementById("max").style.color = "";
        }
    }

    function handleOverBudget(num) {
        num > budget ? isOverBudget(true) : isOverBudget(false);
    }

    // May change number input to this instead. Need to figure out why map function not working unless put inline
    const generateNumOptions = () => {
        // const count = [];
        // for (let i = 0; i < 11; i++) {
        //     count.push(i);
        // }
        // count.map((num, id) => {
        //     return (
        //         <select>
        //             <option value={id}>{num}</option>
        //         </select>
        //     );
        // })
        return (
            <select onChange={(e) => item.qty = (e.target.value)}>
                <option id="0">0</option>
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

    // Everything inside here happens when a box is checked
    function handleChange(i) {

        const checkedItems = selected;
        const item = groceryData[i];

        if (!checkedItems.includes(item)) {
            checkedItems.push(item);
            item.qty = 1;
            preSubtotal += item.price * item.qty;
            preTotal += (item.price + (item.price * item.taxRate)) * item.qty;
        }
        else if (checkedItems.includes(item)) {
            checkedItems.splice(checkedItems.indexOf(item), 1);
            preSubtotal -= item.price * item.qty;
            preTotal -= (item.price + (item.price * item.taxRate)) * item.qty;
            item.qty = 0;
        }

        setSelected(checkedItems);

        preSubtotal = Math.round(preSubtotal * 100) / 100;
        preTotal = Math.round(preTotal * 100) / 100;

        handleOverBudget(preTotal);

        setSubtotal(preSubtotal);
        setTotal(preTotal);
    }

    return (
        <>
            <div className="columns">
                <div >
                    <h3 id="instruction">Pick your groceries: </h3>
                    {groceryData.map((item, id) => {

                        // Generates each grocery option based on array
                        return (
                            <div className="columns">
                                <ul key={id} className="listItem">
                                    <label><input type="checkbox" onChange={() => handleChange(id)} id={id} /></label>
                                    <label><input id="itemCount" type="number" onChange={(e) => { item.qty = e.target.value }} value={item.qty} maxLength={3} size={2} /> ${item.price} - {item.name}</label>
                                    {/* <label htmlFor=""> {generateNumOptions()}</label> */}
                                </ul>
                            </div>
                        );
                    })}
                    
                </div>
                <div>
    {/* >>>>Possibly incorporate subtotal and total into here above the list<<<<< */}

                    <h3 >Shopping Cart:</h3> 
                    {selected.map((selection, id) => {
                        return (
                            <div>
                                <ul>
                                    <li>{selection.name} x {selection.qty}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
                
                </div>
                <br />
                <div id="totalsSection">
                    <div id="maxBudget" className="totals">
                        <label>Max Budget: $<input type="number" id="max" name="maxVal" onChange={(e) => handleBudget(e)} defaultValue={150} maxLength={4} size={3} /></label>
                    </div>

                    <h3 className="totals">Subtotal: ${subtotal}</h3>

                    <h3 className="totals">Total: ${total}</h3>
                </div>
              
        </>
    );
}