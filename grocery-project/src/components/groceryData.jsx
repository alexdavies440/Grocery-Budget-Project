class groceryItem {
    constructor(id, name, price, category, taxRate) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.taxRate = taxRate;
    }
}

const bTaxable = 6.391;
const cTaxable = 9.679;


const apples = new groceryItem(1, "Apples", 3.69, "Fruit", bTaxable);
const strawberries = new groceryItem(2, "Strawberries", 2.25, "Fruit", bTaxable);
const  raspberries = new groceryItem(3, "Raspberries", 2.59, "Fruit", bTaxable);
const blackberries = new groceryItem(4, "Blackberries", 2.29, "Fruit", bTaxable);
const redGrapes = new groceryItem(5, "Red Grapes", 4.30, "Fruit", bTaxable);

const onionBagYellow = new groceryItem("Bag of Yellow Onions", 3.19, "Vegetables", bTaxable);
const sweetPotatoBag = new groceryItem("Sweet Potatoe Bag", 2.55, "Vegetables", bTaxable);
const russetPotatoBag = new groceryItem("Russet Potato Bag", 4.65, "Vegetables", bTaxable);

const oatBranBread = new groceryItem("Oat Bran Bread", 2.19, "Dry Goods", bTaxable);
const ketoBread = new groceryItem("Keto Bread", 3.99, "Dry Goods", bTaxable);
const peanutbutterSWCookies = new groceryItem("Peanutbutter Sandwich Cookies", 2.75, "Dry Goods", bTaxable);
const kettleChips = new groceryItem("Kettle Chips", 1.95, "Dry Goods", bTaxable);
const coffee = new groceryItem("Coffee", 4.39, "Dry Goods", bTaxable);

const slicedSalami = new groceryItem("Sliced Salami", 3.09, "Deli", bTaxable);
const slicedCheddar = new groceryItem("Sliced Cheddar", 1.65, "Deli", bTaxable);

const blueMilkGal = new groceryItem("2% Milk Gallon", 3.16, "Dairy", bTaxable);
const skimMilkHalf = new groceryItem("Skim Milk 1/2 Gallon", 1.79, "Dairy", bTaxable);
const halfAndHalf = new groceryItem("Half & Half", 2.79, "Dairy", bTaxable);
const soutCream = new groceryItem("Sour Cream", 1.89, "Dairy", bTaxable);

const  lightOrangeJuice = new groceryItem("Light Orange Juice", 3.29, "Beverages", bTaxable);
const sparklingWater = new groceryItem("Flavored Sparkling Water", 0.69, "Beverages", bTaxable);
const celsius = new groceryItem("Celsius Energy Drink", 2.09, "Beverages", bTaxable);
const sugarFreeEnergy = new groceryItem("Sugar-Free Energy Drink", 3.99, "Beverages", bTaxable);

const porkSpareRibs = new groceryItem("Pork Spare Ribs", 7.16, "Meat", bTaxable);
const groundTurkey = new groceryItem("Ground Turkey", 8.79, "Meat", bTaxable);

const hashBrownPatties = new groceryItem("Hash Brown Patties", 4.95, "Freezer", bTaxable);
const frozenPeas = new groceryItem("Frozen Peas", 1.05, "Freezer", bTaxable);
const frozenCorn = new groceryItem("Frozen Corn", 1.05, "Freezer", bTaxable);
const frozenMixedVeg = new groceryItem("Frozen Mixed Vegetables", 1.05, "Freezer", bTaxable);



const groceryData = [apples, strawberries, raspberries, blackberries, redGrapes, onionBagYellow, sweetPotatoBag, russetPotatoBag, oatBranBread, ketoBread, kettleChips, peanutbutterSWCookies, coffee, slicedSalami, slicedCheddar, ];

export default groceryData;