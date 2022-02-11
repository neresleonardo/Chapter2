import  { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';



export function App() {

  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true)
  }
  
  function handleCloseModal() {
    setOpenModal(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewModalTransition={handleOpenModal} />
      <NewTransactionModal isOpen={openModal} onRequestClose={handleCloseModal} />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

