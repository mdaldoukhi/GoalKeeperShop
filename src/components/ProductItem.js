/* STYLED-COMPONENETS */
import { ProductWrapper } from "../styles";
/* COMPONENETS */
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from '../components/Buttons/UpdateButton'

import { Link } from 'react-router-dom'
import {observer} from 'mobx-react'


function ProductItem(props) {
    const parts = props.name.split(new RegExp(`(${props.text})`, "gi",));
    return (
        //props from the main data (Gloves.js) and return to the ProductList
        <ProductWrapper key={props.id}>
            <Link to={`/products/${props.slug}`}>
                <img
                    src={props.image}
                    alt={props.name}
                />
            </Link>

            <p>
                {parts.map((part) => part.toLowerCase() === props.text.toLowerCase() ? <i>{part}</i> : part)}
            </p>
            <p>
                Price: <span>{props.price}</span> KD
            </p>
            <UpdateButton glove={props.glove}/>
            <DeleteButton
                gloveID={props.id}
            />
        </ProductWrapper>
    );
}

export default observer(ProductItem);
