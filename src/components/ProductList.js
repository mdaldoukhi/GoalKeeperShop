import gloves from '../gloves'
import { ListWrapper, ProductTile } from '../styles';
import ProductItem from './ProductItem'

function ProductList() {
    return (
        <div>
            {/* Header of the Product */}
            <ProductTile>Gloves Product</ProductTile>
            <ListWrapper>
                {/* push the data to ProductList file by using Props */}
                {gloves.map(gloves => <ProductItem id={gloves.id} name={gloves.name} image={gloves.image} price={gloves.price}/>)}
            </ListWrapper>
        </div>
    );
  }
  
  export default ProductList;
