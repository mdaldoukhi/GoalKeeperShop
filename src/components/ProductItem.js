function ProductItem(props) {

    return (
        //props from the main data (Gloves.js) and return to the ProductList
        <div key={props.id}>
            <img className="image-product" src={props.image} alt={props.name}/>
            <p className="product-name">{props.name}</p>
            <p className="product-price">Price: <span>{props.price}</span> KD</p>
        </div>
    )};
  
  export default ProductItem;