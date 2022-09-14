import Modal from './Modal'
import { UseModal } from 'hooks/useModal/useModal';
import CardsII from 'components/card/CardsII';


const ModalsCard = () => {
    const [ isOpen, closeModal, openModal ] = UseModal(false)

    return (
        <div>
            <Modal>
                <CardsII/>
            </Modal>      
        </div>
    );
}

export default ModalsCard;
