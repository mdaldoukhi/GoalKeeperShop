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
    transition: 0.5s ease-in-out;
    width: 25%;
    background-color: #fff;
  }
  div:hover {
    transform: translateY(-10px);
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
