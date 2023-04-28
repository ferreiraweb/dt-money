import { ReactNode, createContext, useEffect, useState } from "react";
import { ITransactionItem } from "../@types/transactions-types";
import { api } from "../services/axios";

type ITransactionContextType = {
  transactions: ITransactionItem[];
  getTransactions: (query?: string) => Promise<void>;
  addTransaction: (data: ITransactionItem) => Promise<void>;
};

export const TransactionsContext = createContext({} as ITransactionContextType);

interface ITransactionContextProviderProps {
  children: ReactNode;
}

export function TransactionContextProvider({
  children,
}: ITransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<ITransactionItem[]>([]);

  async function getTransactions(query?: string) {
    const response = await api.get("/transaction", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    console.log(response.data);

    setTransactions(response.data);
  }

  async function addTransaction(data: ITransactionItem) {
    const { description, type, category, price } = data;

    const response = await api.post("/transaction", {
      description,
      type,
      category,
      price,
      createdAt: new Date().toISOString(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, getTransactions, addTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
