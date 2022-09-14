import React from 'react';
import './style.css';
const Modal = ( {children, isOpen, openModal, closeModal} ) => {
    const handleModalContainerClikc = (e)=>e.stopPropagation();
    return (
        <article className= {`modal ${isOpen && "is-open"}`} onClick={openModal}> 
            <div className='modal-container' onClick={handleModalContainerClikc}>
                <button className='modal-close' onClick={closeModal}>Closex</button>
                {children}
            </div>
            
        </article>
    );
}

export default Modal;
