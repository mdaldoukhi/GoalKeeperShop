/* Styled-Componenet */
import { ListWrapper, ProductTile, SearchBar, CreateNew } from "../styles";
/* Componenet */
import ProductItem from "./ProductItem";
/* GLOBAL useState */
import { useState } from "react";

import productStore from '../stores/productStore'
import {observer} from 'mobx-react'

import AddButton from "./Modal/GlovesModal";


function ProductList() {
    const [quary, setQuary] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {setIsOpen(true)};
    const closeModal = () => {setIsOpen(false)}
    return (
        <div>
            {/* Header of the Product */}
            <ProductTile>Gloves Product</ProductTile>
            <SearchBar
                placeholder="Search for your Gloves Brand"
                onChange={(event) => setQuary(event.target.value)}
            />
            <CreateNew onClick={openModal}/>
           <AddButton isOpen={isOpen} closeModal={closeModal}/>
            <ListWrapper>
                {/* push the data to ProductList file by using Props */}
                {productStore.gloves
                    .filter(
                        (gloves) =>
                            gloves.name.toLowerCase().includes(quary.toLowerCase()) ||
                            gloves.price === parseInt(quary)
                    )
                    .map((gloves) => (
                        <ProductItem
                            id={gloves.id}
                            name={gloves.name}
                            image={gloves.image}
                            price={gloves.price}
                            slug={gloves.slug}
                            text={quary}
                            detail={gloves.detail}
                            glove={gloves}
                        />
                    ))}
            </ListWrapper>

        </div>
    );
}

export default observer(ProductList);
