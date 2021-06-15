/* Compnenets */
import DeleteButton from "./Buttons/DeleteButton";
/* Styled-Compnenet */
import { ProductDetails } from "../styles";

/* Function will show the product Details */
function ProductDetail(props) {
    return (
        <ProductDetails>
            <img src={props.glove.image} alt={props.glove.name} />
            <h2>{props.glove.name}</h2>
            <p>{props.glove.detail}</p>
            <p>
                Price: <span>{props.glove.price}</span> KD
            </p>
            <button onClick={() => props.setGlove(false)}>Back</button>
            <DeleteButton
                deletGloves={props.glove.deletGloves}
                gloveID={props.glove.id}
                setGlove={props.setGlove}
            />
        </ProductDetails>
    );
}

export default ProductDetail;
