

export interface ITransactionItem {
    id: number;
    category: string;
    createAt: string;
    description: string;
    price: number;
    type: "income" | "outcome";
  }

  