import gloves from '../gloves'
import ProductItem from './ProductItem'

function ProductList() {

    return (
        <div>
            <div>
                {/* Header of the Product */}
                <h1 className="title">Gloves Product</h1>
                <div className="List">
                    {/* push the data to ProductList file by using Props */}
                    {gloves.map((gloves) => (<ProductItem id={gloves.id} name={gloves.name} price={gloves.price} image={gloves.image} />))}
                </div>
            </div>
        </div>
    );
  }
  
  export default ProductList;
