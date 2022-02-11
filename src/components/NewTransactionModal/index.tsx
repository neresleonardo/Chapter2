import Modal from 'react-modal';
import { Container } from './styles';

interface ITransitionModalon {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: ITransitionModalon) {
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <Container>
                <h2>Nova Transação</h2>
                
                <input placeholder="Título"/>
                <input placeholder="Valor" type="number" />
                <input placeholder="Category" />
                <button type="submit"> Cadastrar </button>

            </Container>
        </Modal>
    )
}