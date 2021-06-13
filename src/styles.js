import styled, {createGlobalStyle} from 'styled-components'
import moon from './moon.png'
import sun from './sun.png'

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
export const ToggleSwitch = styled.div `
  width: 130px;
  height:100px;
  margin: 10px 50px;
  .switch{
    position: relative;
    width: 130px;
    height: 50px;
    margin: 0px;
    appearance: none;
    -webkit-appearance: none;
    background-image:url(${moon});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 25px;
    box-shadow: inset 0px 0px 2px rgba(255,255,255,.7);
    transition: background-image .7s ease-in-out;
    outline: none;
    cursor: pointer;
    overflow: hidden;
}
  .switch:checked{
    background-image: url(${sun});
    background-size: cover;
    transition: background-image 1s ease-in-out;
  }

  .switch:after{
    content: '';
    width: 46px;
    height:46px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 2px;
    top: 2px;
    transform: translateX(0px);
    animation: off .7s forwards cubic-bezier(.8, .5, .2, 1.4);
    box-shadow: inset 5px -5px 4px rgba(53, 53, 53, 0.3);
  }
  @keyframes off{
  0%{
      transform: translateX(80px);
      width: 46px;
  }
  50%{
      width: 75px;  
      border-radius: 25px;   
  }
  100%{
      transform: translateX(0px); 
      width: 46px;
  }
}
  .switch:checked:after{
    animation: on .7s forwards cubic-bezier(.8, .5, .2, 1.4);
    box-shadow: inset -5px -5px 4px rgba(53, 53, 53, 0.3);
  }

  @keyframes on{
    0%{
        transform: translateX(0px);
        width: 46px;
    }
    50%{
        width: 75px;  
        border-radius: 25px;   
    }
    100%{
        transform: translateX(80px); 
        width: 46px;
    }
  }
  .switch:checked:before{
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 5px;
    transform-origin: 53px 10px;
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
    animation: sun .7s forwards ease;
  }
  @keyframes sun{
    0%{
        transform: rotate(170deg);
        background-color: transparent;
        box-shadow: 5px -1px 0px #fff;
        filter: blur(0px);
    }
    50%{
        background-color: transparent;
        box-shadow: 5px -1px 0px #fff;
        filter: blur(0px);
    }
    90%{
        background-color: #f5daaa;
        box-shadow: 0px 0px 10px #f5deb4,
        0px 0px 20px #f5deb4,
        0px 0px 30px #f5deb4,
        inset 0px 0px 2px #efd3a3;
        filter: blur(1px);
    }
    100%{
        transform: rotate(0deg);
        background-color: #f5daaa;
        box-shadow: 0px 0px 10px #f5deb4,
        0px 0px 20px #f5deb4,
        0px 0px 30px #f5deb4,
        inset 0px 0px 2px #efd3a3;
        filter: blur(1px);
    }
  }
  .switch:before{
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 5px;
    filter: blur(1px);
    background-color: #f5daaa;
    box-shadow: 0px 0px 10px #f5deb4,
    0px 0px 20px #f5deb4,
    0px 0px 30px #f5deb4,
    inset 0px 0px 2px #efd3a3;
    transform-origin: 53px 10px;
    animation: moon .7s forwards ease;
  }
  @keyframes moon{
    0%{
        transform: rotate(0deg);
        filter: blur(1px);
    }
    50%{
        filter: blur(1px);
    }
    90%{
        background-color: transparent;
        box-shadow: 5px -1px 0px #fff;
        filter: blur(0px);

    }
    100%{
        transform: rotate(170deg);
        background-color: transparent;
        box-shadow: 5px -1px 0px #fff;
        filter: blur(0px);
    }
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