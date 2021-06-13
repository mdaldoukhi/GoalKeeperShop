import gloves from '../gloves'
import { ListWrapper, ProductTile, SearchBar } from '../styles';
import ProductItem from './ProductItem'
import { useState } from 'react';
import { parseInt } from 'lodash';

function ProductList() {
    const [quary, setQuary] = useState("")
    return (
        <div>
            {/* Header of the Product */}
            <ProductTile>Gloves Product</ProductTile>
            <SearchBar placeholder="Search for your Gloves Brand" type="search" onChange={(event) => setQuary(event.target.value)}/>
            <ListWrapper>
                {/* push the data to ProductList file by using Props */}
                {
                    gloves
                    .filter(gloves => gloves.name.includes(quary.toLowerCase()) || gloves.price === parseInt(quary))
                    .map(gloves => <ProductItem id={gloves.id} name={gloves.name} image={gloves.image} price={gloves.price} text={quary}/>)
                }
            </ListWrapper>
        </div>
    );
  }
  
  export default ProductList;
