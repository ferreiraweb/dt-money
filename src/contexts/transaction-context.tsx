import { ReactNode, createContext, useEffect, useState } from "react";
import { ITransactionItem } from "../@types/transactions-types";

type ITransactionContextType = {
  transactions: ITransactionItem[];
};

export const TransactionsContext = createContext({} as ITransactionContextType);

interface ITransactionContextProviderProps {
  children: ReactNode;
}

export function TransactionContextProvider({
  children,
}: ITransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<ITransactionItem[]>([]);

  useEffect(() => {
    async function getTransactionsAll() {
      await fetch("http://localhost:3000/transaction")
        .then((response) => response.json())
        .then((json) => setTransactions(json));
    }

    getTransactionsAll();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
