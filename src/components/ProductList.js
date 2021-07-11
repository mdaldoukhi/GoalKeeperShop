/* Styled-Componenet */
import { ListWrapper, ProductTile, SearchBar, CreateNew } from "../styles";
/* Componenet */
import ProductItem from "./ProductItem";
/* GLOBAL useState */
import { useState } from "react";

import { observer } from 'mobx-react'

import AddButton from "./Modal/GlovesModal";


function ProductList({ products, vendor }) {
    const [quary, setQuary] = useState("");
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => { setIsOpen(true) };
    const closeModal = () => { setIsOpen(false) }

    const productList = products
        .filter((glove) => glove?.name.toLowerCase().includes(quary.toLowerCase()) || glove?.price === parseInt(quary))
        .map((glove) => <ProductItem glove={glove} text={quary} />);

    return (
        <div>
            {/* Header of the Product */}
            <ProductTile>Gloves Product</ProductTile>
            <SearchBar
                placeholder="Search for your Gloves Brand"
                onChange={(event) => setQuary(event.target.value)}
            />
            <CreateNew onClick={openModal} />
            <AddButton isOpen={isOpen} closeModal={closeModal} vendor={vendor}/>
            <ListWrapper>
                {/* push the data to ProductList file by using Props */}
                {productList}
            </ListWrapper>

        </div>
    );
}

export default observer(ProductList);
