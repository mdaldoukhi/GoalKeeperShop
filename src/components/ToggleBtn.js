import { ToggleSwitch } from "../styles"
function ToggleBtn(){
    return (
        <ToggleSwitch class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
        </ToggleSwitch>
    )
}

export default ToggleBtn