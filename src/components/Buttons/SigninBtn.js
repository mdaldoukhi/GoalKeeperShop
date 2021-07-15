import { useState } from 'react';
import Signin from '../Signin'
const SigninBtn = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => { setIsOpen(true) };
    const closeModal = () => { setIsOpen(false) }
    return (
        <div>
            <button onClick={openModal} className="btn btn-outline-primary"> Signin </button>
            <Signin isOpen={isOpen} closeModal={closeModal} />
        </div>
    )
}
export default SigninBtn;