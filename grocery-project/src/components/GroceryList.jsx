import groceryData from "./groceryData";
import Ledger from "./Ledger";

export default function GroceryList () {
    let total = 0;
    const handleChange = () => {
        
         }
    
return (
    <div>
        <h3>Pick your groceries: </h3>
        {groceryData.map((items, id) => {
            
            return (
                <ul>
                    <label>
                        <button>+</button> ${items.price} - {items.name}
                    </label>
                </ul>
            );
        })}
        Subtotal: {total}
       </div>
       );
    }

