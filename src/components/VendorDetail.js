import vendorStore from "../stores/vendorStore";
import { observer } from "mobx-react";

/* Libraries */
import { useParams, Link, Redirect } from "react-router-dom"
import productStore from "../stores/productStore";
import ProductList from "./ProductList";

/* Function will show the product Details */
function VendorDetail() {
    const vendorSlug = useParams().vendorSlug

    const vendor = vendorStore.vendors.find(part => part.slug === vendorSlug);
    const proucts = vendorStore.vendors.map((glove) => productStore.getProductById(glove.id))

    if (!vendor) return <Redirect to="/vendors" />;
    return (
        <div>
            <h1>{vendor.name}</h1>
            <img src={vendor.image} style={{ width: "10%" }} />
            <ProductList proucts={proucts} vendor={vendor} />
        </div>
    );
}
export default observer(VendorDetail);
