import GroceryList from "./GroceryList";

export default function Ledger() {
    //let total = 0;
    
    return (
        <>
        <div>
            Subtotal: ${}
        </div>
        <div>
            <label>Max Budget: $<input type="number" defaultValue={150}/></label>
        </div>
        </>
        
    )
}