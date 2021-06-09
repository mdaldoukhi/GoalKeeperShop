import { ProductWrapper } from "../styles";

function ProductItem(props) {

    return (
        //props from the main data (Gloves.js) and return to the ProductList
        <ProductWrapper key={props.id}>
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <p>Price: <span>{props.price}</span> KD</p>
        </ProductWrapper>
    )};
  
  export default ProductItem;