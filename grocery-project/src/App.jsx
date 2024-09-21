import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Banner from './components/Banner';
import GroceryList from './components/GroceryList';
import groceryData from './components/groceryData';
import Ledger from './components/Ledger';

function App() {
  // const [subtotal, setSubtotal] = useState(0);

 //const addItem = (item) => setSubtotal(subtotal + item.price);
 
  
  return (
    <div>
      <Banner />
      <GroceryList />
      <Ledger />
      
      
    </div>
      
  );
}

export default App
