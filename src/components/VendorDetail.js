import vendorStore from "../stores/vendorStore";
import productStore from "../stores/productStore";

import { observer } from "mobx-react";

/* Libraries */
import { useParams } from "react-router-dom"

import ProductList from "./ProductList";

/* Function will show the product Details */
function VendorDetail() {
    const vendorSlug = useParams().vendorSlug

    const vendor = vendorStore.vendors.find(part => part.slug === vendorSlug);
    const products = vendor.gloves.map((glove) => productStore.getProductById(glove.id))

    return (
        <div>
            <h1>{vendor.name}</h1>
            <img src={vendor.image} alt={vendor.name} style={{ width: "10%" }} />
            <ProductList products={products} vendor={vendor} />
        </div>
    );
}
export default observer(VendorDetail);
