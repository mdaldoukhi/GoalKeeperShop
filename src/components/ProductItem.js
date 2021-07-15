/* STYLED-COMPONENETS */
import { ProductWrapper, HighLighted, ProductTitle, ProductPrice, ProductFooter } from "../styles";
/* COMPONENETS */
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from '../components/Buttons/UpdateButton'

import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

import authStore from '../stores/authStore'


function ProductItem(props) {
    const parts = props.glove.name.split((new RegExp(`(${props.text})`, 'gi')));
    return (
        //props from the main data (Gloves.js) and return to the ProductList
        <ProductWrapper key={props.glove.id}>
            <Link to={`/products/${props.glove.slug}`}>
                <img
                    src={props.glove.image}
                    alt={props.glove.name}
                />
            </Link>

            <ProductTitle>
                {parts.map((part) => props.text.toLowerCase() === part.toLowerCase() ? <HighLighted>{part}</HighLighted> : part)}
            </ProductTitle>
            <ProductPrice>
                PRICE: <span>{props.glove.price}</span> KD
            </ProductPrice>
            {authStore.user && <ProductFooter>
                <UpdateButton glove={props.glove} />
                <DeleteButton
                    gloveID={props.glove.id}
                />
            </ProductFooter>}

        </ProductWrapper>
    );
}

export default observer(ProductItem);
