import './App.css';
import Home from "./components/Home";
import ProductList from './components/ProductList';
function App() {


  
  return (
    <div>
      {/* Call Home File Contain (title, description, shop image)*/}
      <Home />
      {/* Call Product File Contain (product list and product items)*/}
      <ProductList />
    </div>
  );
}

export default App;
