/* STYLED-COMPONENET */
import { DeleteBtn } from "../../styles";

function DeleteButton(props) {
    const handleDelete = () => {
        props.deletGloves(props.gloveID);
    };
    return <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>;
}

export default DeleteButton;
