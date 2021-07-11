/* Compnenets */
import DeleteButton from "./Buttons/DeleteButton";
/* Styled-Compnenet */
import { ProductDetails, TopDetails, BackBtn, LeftDetail, RightDetail } from "../styles";

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
            <TopDetails>
                <Link to="/products"><BackBtn></BackBtn></Link>
                <DeleteButton
                    gloveID={productCheck.id}
                />
            </TopDetails>
            <LeftDetail>
                <img src={productCheck.image} alt={productCheck.name} />
            </LeftDetail>
            <RightDetail>
                <h2>{productCheck.name}</h2>
                <p>
                    Price: <span>{productCheck.price}</span> KD
                </p>
                <p>{productCheck.detail}</p>

            </RightDetail>



        </ProductDetails>
    );
}

export default observer(ProductDetail);
