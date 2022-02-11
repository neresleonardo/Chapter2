import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface openNewTransactionModal {
    onOpenNewModalTransition: () => void;
}

export function Header({onOpenNewModalTransition}: openNewTransactionModal) {
    return(
        <Container>
            <Content>
            <img src={logoImg} alt="Logo" />
            <button onClick={onOpenNewModalTransition} type="button">
                Nova Transação
            </button>
            </Content>
        </Container>
    )
}