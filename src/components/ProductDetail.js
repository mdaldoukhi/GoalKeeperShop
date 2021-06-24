/* Compnenets */
import DeleteButton from "./Buttons/DeleteButton";
/* Styled-Compnenet */
import { ProductDetails } from "../styles";

import productStore from "../stores/productStore";
import { observer } from "mobx-react";

/* Libraries */
import { useParams, Link, Redirect } from "react-router-dom"

/* Function will show the product Details */
function ProductDetail() {
    const productSlug = useParams().productSlug

    const productCheck = productStore.gloves.find(part => part.slug === productSlug);


    if (!productCheck) return <Redirect to="/products" />;
    return (
        <ProductDetails>
            <img src={productCheck.image} alt={productCheck.name} />
            <h2>{productCheck.name}</h2>
            <p>{productCheck.detail}</p>
            <p>
                Price: <span>{productCheck.price}</span> KD
            </p>
            <Link to="/products"><button>Back</button></Link>

            <DeleteButton
                gloveID={productCheck.id}
            />
        </ProductDetails>
    );
}

export default observer(ProductDetail);
