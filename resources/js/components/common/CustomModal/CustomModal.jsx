import Modal from 'react-modal';
import { closeIcon } from '@/components/icons/common';
import './CustomModal.scss';

const CustomModal = ({ isOpen, closeModal, children }) => {
    if (isOpen) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
        >
            <div className="custom-modal">
                {children}
                <span className="close-button" onClick={closeModal}>
                    {closeIcon}
                </span>
            </div>
        </Modal>
    );
};

export default CustomModal;
