import { useContext } from "react";
import { SearchForm } from "./components/search-form-index";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from "./transactions-styles";
import { TransactionsContext } from "../../contexts/transaction-context";
import { formatCurrency, formatDate } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <TransactionContainer>
      <SearchForm />
      <TransactionTable>
        <tbody>
          {transactions.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td className="text-right">
                  <PriceHighLight variant={item.type}>
                    {item.type === "outcome" && formatCurrency(item.price * -1)}
                    {item.type === "income" && formatCurrency(item.price)}
                  </PriceHighLight>
                </td>
                <td>{item.category}</td>
                <td>{formatDate(item.createAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  );
}
