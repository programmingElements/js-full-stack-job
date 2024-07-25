import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import A from './components/A';

export const UserContext = createContext('SVGIE');
export const CartContext = createContext([]);

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <UserContext.Provider value='Swami Vevikananda'>
        <CartContext.Provider value={1000}>
        <A />
        </CartContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
