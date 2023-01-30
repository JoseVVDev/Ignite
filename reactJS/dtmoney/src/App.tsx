import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactonModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOPen, setIsNewTransactionModalOPen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOPen(true);
  }

  function handleCloseNewTransactionModal () {
      setIsNewTransactionModalOPen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactonModal
        isOpen={isNewTransactionModalOPen}
        onRequestClose={ handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
