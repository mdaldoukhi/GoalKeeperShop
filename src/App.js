/* Components */
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ToggleBtn from "./components/ToggleBtn";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";

/* Styled-components */
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles";

/* Global useState */
import { useState } from "react";
import { Switch, Route } from 'react-router'

/* Theme Coloring */
const theme = {
  light: {
    mainColor: "#000",
    backgroundColor: "#fff",
    borderColor: "#000",
    red: "red",
    titleColor: '#0071BC'
  },
  dark: {
    mainColor: "#90A4AE",
    backgroundColor: "#222",
    borderColor: "#fff",
    red: "red",
    titleColor: '#ECEFF1'
  },
};
function App() {
  /* useState to change theme Color */
  const [currentMode, setCurrentMode] = useState("dark");
  /* function to toggle the page color and text Mode */
  const toggleSwitch = () => {
    return currentMode === "dark"
      ? setCurrentMode("light")
      : setCurrentMode("dark");
  };

  return (
    <ThemeProvider theme={theme[currentMode]}>
    <Navbar currentMode={currentMode}/>
     <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/products/:productSlug">
        <ProductDetail />
        </Route>
        <Route path="/products">
        <ProductList/>
        </Route>
      </Switch>
     
      {/* Call Home File Contain (title, description, shop image)*/}
      {/* Call function of product details or show all product */}
      {/* {setView()} */}
      <ToggleBtn onClick={toggleSwitch} />
    </ThemeProvider>
  );
}
export default App;
