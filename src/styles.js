import styled, {createGlobalStyle} from 'styled-components'
import moon from './moon.png'
import sun from './sun.png'
import { Link, NavLink } from 'react-router-dom';

import { AiFillPlusCircle } from 'react-icons/ai';

export const GlobalStyle = createGlobalStyle `
 body{
     color: ${props => props.theme.mainColor};
     background-color: ${props => props.theme.backgroundColor};
     .List div{
         box-shadow: 0 0 10px ${props => props.theme.borderColor};
     }
 }

`
export const Logo = styled(Link) `
  img {
    width: 15%;
  }
`;
export const NavProduct = styled(NavLink) `
  color: ${props => props.theme.mainColor};
  text-decoration: none;
  &.active {
    color: red;
  }
`;
export const Title = styled.h1 `
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  color: ${props => props.theme.titleColor};
  text-transform: uppercase;
`
export const Description = styled.h4 `
  width: 80%;
  margin: 15px auto;
  line-height: 1.5;
  font-family: 'Courier New', Courier, monospace;
  color: ${props => props.theme.mainColor};
  font-size: 18px;
`
export const ShopImage = styled.img `
  width: 100%;
  display: block;
  margin: 0 auto;
`
export const ProductTile = styled.h1 `
    color: ${props => props.theme.mainColor};
    margin: 30px 100px;
  text-transform: uppercase;
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
  float: right;
  margin: 30px 0;
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
        width: 80%;
        margin: 0px 10%;
        padding: 12px 24px;
        background-color: transparent;
        transition: transform 250ms ease-in-out;
        font-size: 14px;
        line-height: 18px;
        color: #575756;
        background-color: transparent;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: 95% center;
        border-radius: 50px;
        border: 1px solid #575756;
        transition: all 250ms ease-in-out;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        ::placeholder {
            color: color(#575756 a(0.8));
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }
        :hover,
        :focus {
            padding: 12px 0;
            outline: 0;
            border: 1px solid transparent;
            border-bottom: 1px solid #575756;
            border-radius: 0;
            background-position: 100% center;
        }
`
export const ProductDetails = styled.div `
  margin: 30px auto;
  width: 80%;
  border-radius:7px;
  overflow: hidden;
  img {
    width: 40%;
    float: left;
    margin-right: 20px;
  }
  h2 {
    text-align: center;
    color: #fff
  }
  p {
    vertical-align: middle;
    line-height: 1.7;
  }
  button {
  background-color: transparent;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 15px ;
  border: none;
  cursor: pointer;
  align-self: center;
  font-size: 15px;
  margin: 20px;
  text-align: center;
  text-transform: uppercase;
  border-color: #3498db;
  color:  ${props => props.theme.borderColor};
  box-shadow: 0 0 40px 40px #ffc107 inset, 0 0 0 0 #ffc107;
  transition: all 150ms ease-in-out;
  :hover {
    box-shadow: 0 0 10px 0 #ffc107 inset, 0 0 10px 4px #ffc107;
  }
}
`;
export const DeleteBtn = styled.p `
  color: ${props => props.theme.borderColor} !important;
  cursor: pointer;
  font-weight: bold;
  width: fit-content;
  display: inline-block;
  background-color: transparent;
  border-radius: 5px;
  padding: 3px 15px;
  border: none;
  cursor: pointer;
  align-self: center;
  font-size: 14px !important;
  text-align: center;
  text-transform: uppercase;
  border-color: #3498db;
  box-shadow: 0 0 40px 40px #dc3545 inset, 0 0 0 0 #dc3545;
  transition: all 150ms ease-in-out;
  :hover {
    box-shadow: 0 0 10px 0 #dc3545 inset, 0 0 10px 4px #dc3545;
  }
`;

export const CreateNew = styled(AiFillPlusCircle) `
  margin: 0 90%;
  font-size: 2em;
  color: ${props => props.theme.mainColor};
`;