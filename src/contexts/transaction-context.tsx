import { ReactNode, createContext, useEffect, useState } from "react";
import { ITransactionItem } from "../@types/transactions-types";

interface ITransactionContextType {
  transactionsList: ITransactionItem[];
}

export const TransactionContext = createContext({} as ITransactionContextType);

interface ITransactionContextProviderProps {
  children: ReactNode;
}

export function TransactionContextProvider({
  children,
}: ITransactionContextProviderProps) {
  const [transactionsList, setTransactionList] = useState<ITransactionItem[]>(
    []
  );

  useEffect(() => {
    const getTransaction = async () => {
      await fetch("http://localhost:3000/transaction")
        .then((response) => response.json())
        .then((json) => {
          setTransactionList(json);
        });
    };

    getTransaction();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactionsList }}>
      {children}
    </TransactionContext.Provider>
  );
}
