import React, { useEffect, useState } from "react";
import GroceryList from "./GroceryList";

export default function Ledger() {
    const [checked, setChecked] = useState("no"); 
    useEffect(() => {
        document.title = `Checked: ${checked}`;
        return () => {
          document.title = "";
        }
      });
    function handleChange() {
        if (checked == "no") {
            setChecked("yes");
        } else {
            setChecked("no");
        }

        
    }
    
    
   
    return (
        <>
        <div>Subtotal: </div>
        <div>
            <label>Checked: <input type="checkbox" onChange={() => handleChange()} defaultValue={"no"}/>{checked}</label>
        </div>
        </>
        
    )
}