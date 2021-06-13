import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
 body{
     color: ${props => props.theme.mainColor};
     background-color: ${props => props.theme.backgroundColor};
     .List div{
         box-shadow: 0 0 10px ${props => props.theme.borderColor};
     }
 }

`
export const Title = styled.h1 `
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  color: #bc4749;

`
export const Description = styled.h4 `
  width: 50%;
  margin: 15px auto;
  line-height: 1.5;
  font-family: 'Courier New', Courier, monospace;
  color: #2b4162;
`
export const ShopImage = styled.img `
  width: 50%;
  display: block;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 5px #386641;
`
export const ProductTile = styled.h1 `
    color: #bc4749;
    margin: 30px 100px;
`
export const ListWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  div {
    border: 1px solid #000;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 5px #000;
    text-align: center;
    width: 25%;
    background-color: #fff;
  }
`
export const ProductWrapper = styled.div `
    img {
        width: 75%;
    }
    p {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 18px;
        color: #235eb6;
        span {
            color: #bc4749;
            font-weight: bold;
            font-size: 25px;
        }
    }
`
export const ToggleSwitch = styled.label `
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 10px 50px;

  input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    background-color: #2196F3;
  }

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  /* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

`
export const Toggle = styled.button `
  padding: 5px 15px;
  margin: 15px;
  font-size: 18px;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.backgroundColor};
  border-radius: 10px;
`
export const SearchBar = styled.input `
  padding: 5px 15px;
  display: block;
  width: 50%;
  margin: auto;
  font-size: 15px;

  ::placeholder {
    font-size: 15px;
  }
`