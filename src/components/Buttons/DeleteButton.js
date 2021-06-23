/* STYLED-COMPONENET */
import { DeleteBtn } from "../../styles";
import productStore from "../../stores/productStore";

function DeleteButton(props) {
    const handleDelete = () => {
        productStore.deletGloves(props.gloveID);
    };
    return <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>;
}

export default DeleteButton;
