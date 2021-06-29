/* STYLED-COMPONENETS */
import { ProductWrapper, HighLighted, ProductTitle, ProductPrice, ProductFooter } from "../styles";
/* COMPONENETS */
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from '../components/Buttons/UpdateButton'

import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'


function ProductItem(props) {
    const parts = props.name.split((new RegExp(`(${props.text})`, 'gi')));
    return (
        //props from the main data (Gloves.js) and return to the ProductList
        <ProductWrapper key={props.id}>
            <Link to={`/products/${props.slug}`}>
                <img
                    src={props.image}
                    alt={props.name}
                />
            </Link>

            <ProductTitle>
                {parts.map((part) => props.text.toLowerCase() === part.toLowerCase() ? <HighLighted>{part}</HighLighted> : part)}
            </ProductTitle>
            <ProductPrice>
                PRICE: <span>{props.price}</span> KD
            </ProductPrice>
            <ProductFooter>
                <UpdateButton glove={props.glove} />
                <DeleteButton
                    gloveID={props.id}
                />
            </ProductFooter>
        </ProductWrapper>
    );
}

export default observer(ProductItem);
