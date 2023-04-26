import { useContext } from "react";
import { TransactionContext } from "../../contexts/transaction-context";
import { SearchForm } from "./components/search-form-index";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from "./transactions-styles";

export function Transactions() {
  const { transactionsList } = useContext(TransactionContext);

  return (
    <TransactionContainer>
      <SearchForm />
      <TransactionTable>
        <tbody>
          {transactionsList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>
                  <PriceHighLight variant={item.type}>
                    {item.price}
                  </PriceHighLight>
                </td>
                <td>{item.category}</td>
                <td>{item.createAt}</td>
              </tr>
            );
          })}
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  );
}
