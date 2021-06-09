import './App.css';
import Home from "./components/Home";
import ProductList from './components/ProductList';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '../src/styles'

const theme = {
  mainColor: 'yellow',
  backgroundColor: 'black',
  borderColor: '#fff'
}
function App() {

  return (
    <ThemeProvider theme = {theme}>
    <GlobalStyle />
      {/* Call Home File Contain (title, description, shop image)*/}
      <Home />
      {/* Call Product File Contain (product list and product items)*/}
      <ProductList />
    </ThemeProvider>
  );
}
export default App;
