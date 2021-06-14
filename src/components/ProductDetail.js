import {ProductDetails} from '../styles';
function ProductDetail(props) {

    
    return (
        <ProductDetails>
            <img src={props.glove.image} alt={props.glove.name}/>
            <p>{props.glove.name}</p> 
            <p>{props.glove.detail}</p>
            <p>Price: <span>{props.glove.price}</span> KD</p>
            <button onClick={() => props.setGlove(false)}>Back</button>
        </ProductDetails>
    )};
  
  export default ProductDetail;