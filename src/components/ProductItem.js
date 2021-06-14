import { ProductWrapper } from "../styles";

function ProductItem(props) {
    const parts = props.name.split(new RegExp(`(${props.text})`, 'gi'));
    return (
        //props from the main data (Gloves.js) and return to the ProductList
        <ProductWrapper key={props.id}>
            <img src={props.image} alt={props.name} onClick={()=> props.setGlove(props)}/>
            <p>{parts.map(part => part.toLowerCase() === props.text.toLowerCase() ? <mark>{part}</mark> : part)}</p> 
            <p>Price: <span>{props.price}</span> KD</p>
        </ProductWrapper>
    )};
  
  export default ProductItem;
