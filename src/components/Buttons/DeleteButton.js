/* STYLED-COMPONENET */
import { DeleteBtn } from "../../styles";

function DeleteButton(props) {
    const handleDelete = () => {
        props.deletGloves(props.gloveID);
        props.setGlove(false);
    };
    return <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>;
}

export default DeleteButton;
