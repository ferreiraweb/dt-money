import { SearchForm } from "./components/search-form-index";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from "./transactions-styles";

export function Transactions() {
  return (
    <TransactionContainer>
      <SearchForm />
      <TransactionTable>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>
              <PriceHighLight variant="up">R$ 12.000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>13/04/2023</td>
          </tr>
          <tr>
            <td>Hamburger</td>
            <td>
              <PriceHighLight variant="down">-R$ 59,00</PriceHighLight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2023</td>
          </tr>
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  );
}
