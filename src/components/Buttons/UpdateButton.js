import { useState } from 'react';
import { UpdateBtn, Modify } from '../../styles';
import GlovesModal from '../Modal/GlovesModal'
const UpdateButton = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {setIsOpen(true)};
    const closeModal = () => {setIsOpen(false)}
    return (
        <Modify>
            <UpdateBtn onClick={openModal}/>
            <GlovesModal isOpen={isOpen} closeModal={closeModal} oldGlove={props.glove}/>
        </Modify>
    )
}
export default UpdateButton;