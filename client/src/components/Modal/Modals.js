import React from 'react';
import Modal from './Modal'
import { UseModal } from '../../hooks/useModal/useModal'
import FormCreate from 'components/createRecipe/formCreate';
const Modals = () => {
    /*const [isOpenModal1, openModal1 , closeModal1]  = UseModal(false)
    return (
        <div>
            <h1>Modals-Example</h1>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                    <h3>Modal 1</h3>
                    <p>Test Modal</p>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNP3Ji_XhqdxK4IKxmLj_YPhrNIq3YpfCFJW5LfjgKHQ&s' alt='imagen'/>
            </Modal>
        </div>
    );*/

const [ isOpen, closeModal, openModal ] = UseModal(false)
return (
    <div>
        <button onClick={openModal}>Create Recipe..</button>
            <Modal isOpen={isOpen} closeModal={closeModal} openModal={openModal}>
                   <FormCreate/> 
            </Modal>
    </div>
)
 

}

export default Modals;
