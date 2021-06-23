/* Styled-Componenet */
import { ListWrapper, ProductTile, SearchBar } from "../styles";
/* Componenet */
import ProductItem from "./ProductItem";
/* GLOBAL useState */
import { useState } from "react";

import productStore from '../stores/productStore'
import {observer} from 'mobx-react'

function ProductList(props) {
    const [quary, setQuary] = useState("");

    return (
        <div>
            {/* Header of the Product */}
            <ProductTile>Gloves Product</ProductTile>
            <SearchBar
                placeholder="Search for your Gloves Brand"
                onChange={(event) => setQuary(event.target.value)}
            />
            <ListWrapper>
                {/* push the data to ProductList file by using Props */}
                {productStore.gloves
                    .filter(
                        (gloves) =>
                            gloves.name.includes(quary.toLowerCase()) ||
                            gloves.price === parseInt(quary)
                    )
                    .map((gloves) => (
                        <ProductItem
                            id={gloves.id}
                            name={gloves.name}
                            image={gloves.image}
                            price={gloves.price}
                            slug={gloves.slug}
                            text={quary}
                            detail={gloves.detail}
                            deletGloves={props.deletGloves}
                        />
                    ))}
            </ListWrapper>
        </div>
    );
}

export default observer(ProductList);
