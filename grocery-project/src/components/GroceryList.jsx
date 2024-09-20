import groceryData from "./groceryData";

export default function GroceryList () {
   
return (
    <div>
        <h3>Pick your groceries: </h3>
        {groceryData.map((items, id) => {
            return (
                <ul><input type="checkbox" />{items.name}</ul>
            );
        })}
        
       </div>
       );
}

