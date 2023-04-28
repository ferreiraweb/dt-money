export interface ITransactionItem {
  id: number;
  category: string;
  createdAt: string;
  description: string;
  price: number;
  type: "income" | "outcome";
}
