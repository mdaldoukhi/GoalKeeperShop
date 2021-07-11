/* Styled-Componenet */
import { ListWrapper, ProductTile, SearchBar, CreateNew } from "../styles";
/* Componenet */
import VendorItem from "./VendorItem";

/* GLOBAL useState */
import { useState } from "react";

import vendorStore from '../stores/vendorStore'
import { observer } from 'mobx-react'



function VendorList() {
    const [quary, setQuary] = useState("");

    return (
        <div>
            {/* Header of the Product */}
            <ProductTile>Vendors</ProductTile>
            <SearchBar
                placeholder="Search for your Gloves Brand"
                onChange={(event) => setQuary(event.target.value)}
            />
            <div>
                {/* push the data to ProductList file by using Props */}
                {vendorStore.vendors
                    .filter(
                        (shops) =>
                            shops.name.toLowerCase().includes(quary.toLowerCase()) ||
                            shops.price === parseInt(quary)
                    )
                    .map((shops) => (
                        <VendorItem
                            shops={shops}
                            text={quary}
                        />
                    ))}
            </div>

        </div>
    );
}

export default observer(VendorList);
