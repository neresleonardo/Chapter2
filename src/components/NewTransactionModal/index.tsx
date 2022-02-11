import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
//img
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface ITransitionModalon {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: ITransitionModalon) {
   const {createTransaction} = useTransactions();
   
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransactionModal(event: FormEvent) {
        event.preventDefault();
       await createTransaction({
            title,
            amount,
            category,
            type,
        }
        )
        setTitle('');
        setAmount(0);
        setType('deposit');
        setCategory('');
        onRequestClose();
    }

    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >

            <button
            onClick={onRequestClose} 
            type="button"
            className="react-modal-close"
            >
                <img src={closeImg} alt="close modal" />
            </button>

            <Container onSubmit={handleCreateNewTransactionModal}>
                <h2>Nova Transação</h2>
                
                <input 
                    value={title} 
                    placeholder="Título"
                    onChange={event => setTitle(event.target.value)}
                
                />

                <input
                    placeholder="Valor"
                    type="number" 
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>

                <RadioBox
                    type="button"
                    onClick={() => { setType('deposit') }}
                    isActive={type === 'deposit'}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                    type="button"
                    onClick={() => { setType('withdraw') }}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>
                </TransactionTypeContainer>

                <input 
                
                placeholder="Category" 
                value={category}
                onChange={event => setCategory(event.target.value)}
                />

                <button type="submit"> Cadastrar </button>

            </Container>
        </Modal>
    )
}