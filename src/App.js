//components
import Home from "./components/Home";
import ProductList from './components/ProductList';
import ToggleBtn from "./components/ToggleBtn";

//Styles
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '../src/styles';
//global useState
import {useState} from 'react'
import ProductDetail from "./components/ProductDetail";

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
  /* Here where will show the details and function will check the status of user clicked or not */
  const [glove, setGlove] = useState(false)
  const setView = () => {return glove ? <ProductDetail glove={glove} onClick={() => setGlove(false)}/> : <ProductList setGlove={setGlove}/>}

  return (
    <ThemeProvider theme = {theme[currentMode]}>
    <ToggleBtn onClick={toggleSwitch}/>
    <GlobalStyle />
      {/* Call Home File Contain (title, description, shop image)*/}
      <Home />
      {/* Call function of product details or show all product */}
      {setView()}
      
    </ThemeProvider>
  );
}
export default App;
