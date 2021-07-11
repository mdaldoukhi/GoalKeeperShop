import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { HighLighted } from "../styles";



function VendorItem(props) {
    const parts = props.shops.name.split((new RegExp(`(${props.text})`, 'gi')));
    return (
        //props from the main data (Gloves.js) and return to the ProductList
        <div>
            <p>{parts.map((part) => props.text.toLowerCase() === part.toLowerCase() ? <HighLighted>{part}</HighLighted> : part)}</p>

            <Link to={`/vendors/${props.shops.slug}`}>
                <img
                    src={props.shops.image}
                    alt={props.shops.name}
                    style={{width: "20%"}}
                />
            </Link>
        </div>
    );
}

export default observer(VendorItem);
