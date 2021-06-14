/* Styled-Componenet */
import { ToggleSwitch } from "../styles";

function ToggleBtn(props) {
    return (
        <ToggleSwitch class="switch">
            <input
                type="checkbox"
                name="checkbox"
                class="switch"
                onClick={props.onClick}
            ></input>
        </ToggleSwitch>
    );
}

export default ToggleBtn;
