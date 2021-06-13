//components
import Home from "./components/Home";
import ProductList from './components/ProductList';
import ToggleBtn from "./components/ToggleBtn";
//Styles
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '../src/styles';
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
  // const [textMode, setTextMode] = useState("Dark Mode")
  const [currentMode, setCurrentMode] = useState("dark")

  /* function to toggle the page color and text Mode */
  const toggleSwitch = () => {
    return (currentMode === "dark") ? setCurrentMode("light") : setCurrentMode("dark") 
    
  }

  return (
    <ThemeProvider theme = {theme[currentMode]}>
    <ToggleBtn onClick={toggleSwitch}/>
    <GlobalStyle />
      {/* Call Home File Contain (title, description, shop image)*/}
      <Home />
      {/* Call Product File Contain (product list and product items)*/}
      <ProductList />
    </ThemeProvider>
  );
}
export default App;
