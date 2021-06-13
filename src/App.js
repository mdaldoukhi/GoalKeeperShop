//components
import Home from "./components/Home";
import ProductList from './components/ProductList';
//Styles
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, Toggle} from '../src/styles';
//global useState
import {useState} from 'react'

const theme = {
 light: {
  mainColor: '#000',
  backgroundColor: '#fff',
  borderColor: '#fff' 
  },
  dark: {
  mainColor: '#fff',
  backgroundColor: '#000',
  borderColor: '#fff'
  } 
}
function App() {
  /* Defult value for textmode and page color */
  const [textMode, setTextMode] = useState("Dark Mode")
  const [currentMode, setCurrentMode] = useState("light")

  /* function to toggle the page color and text Mode */
  const toggleSwitch = () => {
    return (currentMode === "light") ? setCurrentMode("dark") & setTextMode("Light Mode") : setCurrentMode("light") & setTextMode("Dark Mode")
  }

  return (
    <ThemeProvider theme = {theme[currentMode]}>
    <Toggle onClick={toggleSwitch}>{textMode}</Toggle>
    <GlobalStyle />
      {/* Call Home File Contain (title, description, shop image)*/}
      <Home />
      {/* Call Product File Contain (product list and product items)*/}
      <ProductList />
    </ThemeProvider>
  );
}
export default App;
