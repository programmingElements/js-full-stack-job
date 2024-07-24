import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Header />
      <ProductsList />
    </div>
  );
}

export default App;
