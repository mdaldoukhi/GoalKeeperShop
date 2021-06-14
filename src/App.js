/* Components */
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ToggleBtn from "./components/ToggleBtn";
import ProductDetail from "./components/ProductDetail";
/* Styled-components */
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles";
/* Global useState */
import { useState } from "react";
/* Gloves Data */
import gloves from "./gloves";
/* Theme Coloring */
const theme = {
  light: {
    mainColor: "#000",
    backgroundColor: "#fff",
    borderColor: "#fff",
    red: "red",
  },
  dark: {
    mainColor: "#fff",
    backgroundColor: "#000",
    borderColor: "#fff",
    red: "red",
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

  /* useState to Delete the product by passing the id  */
  const [_gloves, setGloves] = useState(gloves);
  const deletGloves = (gloveID) => {
    const updateGloves = _gloves.filter((glove) => glove.id !== gloveID);
    setGloves(updateGloves);
  };

  /* Here where will show the details and function will check the status of user clicked or not */
  const [glove, setGlove] = useState(false);
  const setView = () => {
    return glove ? (
      <ProductDetail glove={glove} setGlove={setGlove} />
    ) : (
      <ProductList
        setGlove={setGlove}
        gloves={_gloves}
        deletGloves={deletGloves}
      />
    );
  };

  return (
    <ThemeProvider theme={theme[currentMode]}>
      <ToggleBtn onClick={toggleSwitch} />
      <GlobalStyle />
      {/* Call Home File Contain (title, description, shop image)*/}
      <Home />
      {/* Call function of product details or show all product */}
      {setView()}
    </ThemeProvider>
  );
}
export default App;
