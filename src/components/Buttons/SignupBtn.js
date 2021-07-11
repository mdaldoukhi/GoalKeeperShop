import { useState } from 'react';
import Signup from '../Signup'
const UpdateButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {setIsOpen(true)};
    const closeModal = () => {setIsOpen(false)}
    return (
        <div>
            <button onClick={openModal} className="btn btn-outline-primary"> Signup </button>
            <Signup isOpen={isOpen} closeModal={closeModal} />
        </div>
    )
}
export default UpdateButton;