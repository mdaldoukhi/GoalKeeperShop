import { ToggleSwitch } from "../styles"
function ToggleBtn(props) {

    return (
        <ToggleSwitch class="switch" >
            <input type="checkbox" />
            <span class="slider round" onClick={props.onClick}></span>
        </ToggleSwitch>
    )
}

export default ToggleBtn