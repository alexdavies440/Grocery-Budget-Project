import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Banner from './components/Banner';
import GroceryList from './components/GroceryList';
import groceryData from './components/groceryData';
import Ledger from './components/Ledger';

function App() {
  
  return (
    <div>
      <Banner />
      <GroceryList />
      // List can go here, or on right side of page?
    </div>
      
  );
}

export default App
