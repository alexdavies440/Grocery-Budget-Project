// class groceryItem {
//     constructor(id, name, price, category, taxRate) {
//         this.name = name;
//         this.price = price;
//         this.category = category;
//         this.taxRate = taxRate;
//     }
// }

const bTaxable = 6.391/100; // Food items taxed at lower rate
const cTaxable = 9.679/100; // Non food items subject to regular sales tax


const groceryData = [
    {id: 1, qty: 0, name: "Apples", price: 3.69, category: "Fruit",taxRate: bTaxable},
    {id: 2, qty: 0, name: "Strawberries", price: 2.25, category: "Fruit", taxRate: bTaxable},
    {id: 3, qty: 0, name: "Raspberries", price: 2.59, category: "Fruit", taxRate: bTaxable},
    {id: 4, qty: 0, name: "Blackberries", price: 2.29, category: "Fruit", taxRate: bTaxable},
    {id: 5, qty: 0, name: "Red Grapes", price: 4.30, category: "Fruit",taxRate: bTaxable},
    {id: 6, qty: 0, name: "Bag of Yellow Onions", price: 3.19, category: "Vegetables", taxRate: bTaxable},
    {id: 7, qty: 0, name: "Sweet Potato Bag", price: 2.55, category: "Vegetables", taxRate: bTaxable},
    {id: 8, qty: 0, name: "Russet Potato Bag", price: 4.65, category: "Vegetables", taxRate: bTaxable},
    {id: 9, qty: 0, name: "Oat Bran Bread", price: 2.19, category: "Dry Goods", taxRate: bTaxable},
    {id: 10, qty: 0, name: "Keto Bread", price: 3.99, category: "Dry Goods", taxRate: bTaxable},
    {id: 11, qty: 0, name: "Peanutbutter Sandwich Cookies", price: 2.75, category: "Dry Goods", taxRate: bTaxable},
    {id: 12, qty: 0, name: "Kettle Chips", price: 1.95, category: "Dry Goods", taxRate: bTaxable},
    {id: 13, qty: 0, name: "Coffee", price: 4.39, category: "Dry Goods", taxRate: bTaxable},
    {id: 14, qty: 0, name: "Sliced Salami", price: 3.09, category: "Deli", taxRate: bTaxable},
    {id: 15, qty: 0, name: "Sliced Cheddar", price: 1.65, category: "Deli", taxRate: bTaxable},
    {id: 16, qty: 0, name: "2% Milk Gallon", price: 3.16, category: "Dairy", taxRate: bTaxable},
    {id: 17, qty: 0, name: "Skim Milk 1/2 Gallon", price: 1.79, category: "Dairy", taxRate: bTaxable},
    {id: 18, qty: 0, name: "Half & Half", price: 2.79, category: "Dairy", taxRate: bTaxable},
    {id: 19, qty: 0, name: "Sour Cream", price: 1.89, category: "Dairy", taxRate: bTaxable},
    {id: 20, qty: 0, name: "Light Orange Juice", price: 3.29, category: "Beverages", taxRate: bTaxable},
    {id: 21, qty: 0, name: "Flavored Sparkling Water", price: 0.69, category: "Beverages", taxRate: bTaxable},
    {id: 22, qty: 0, name: "Celsius Energy Drink", price: 2.09, category: "Beverages", taxRate: bTaxable},
    {id: 23, qty: 0, name: "Sugar-Free Energy Drink", price: 3.99, category: "Beverages", taxRate: bTaxable},
    {id: 24, qty: 0, name: "Pork Spare Ribs", price: 7.16, category: "Meat", taxRate: bTaxable},
    {id: 25, qty: 0, name: "Ground Turkey", price: 8.79, category: "Meat", taxRate: bTaxable},
    {id: 26, qty: 0, name: "Hash Brown Patties", price: 4.95, category: "Freezer", taxRate: bTaxable},
    //{"Frozen Peas", 1.05, "Freezer", bTaxable},
    //{"Frozen Corn", 1.05, "Freezer", bTaxable},
    //{"Frozen Mixed Vegetables", 1.05, "Freezer", bTaxable}
];

export default groceryData;