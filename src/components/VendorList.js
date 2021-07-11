/* Styled-Componenet */
import { CreateNew, ProductTile, SearchBar } from "../styles";
/* Componenet */
import VendorItem from "./VendorItem";

/* GLOBAL useState */
import { useState } from "react";

import vendorStore from '../stores/vendorStore'
import { observer } from 'mobx-react'
import VendorModal from "./Modal/VendorModal";



function VendorList() {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const vendorsList = vendorStore.vendors
        .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
        .map((shop) => <VendorItem shops={shop}  text={query} />);

    return (
        <div>
            {/* Header of the Product */}
            <ProductTile>Vendors</ProductTile>
            <SearchBar
                placeholder="Search for your Gloves Brand"
                onChange={(event) => setQuery(event.target.value)}
            />
            <CreateNew onClick={openModal} />
            <VendorModal isOpen={isOpen} closeModal={closeModal} />
            <div>
                {/* push the data to ProductList file by using Props */}
                {vendorsList}
            </div>

        </div>
    );
}

export default observer(VendorList);
