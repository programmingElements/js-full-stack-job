import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ProductsList from './components/productslist';

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
