import { TransactionContext } from "../../contexts/transaction-context";
import {
  SummaryCard,
  SummaryCardBody,
  SummaryCardHeader,
  SummaryContainer,
} from "./summary-styles";

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { useContext } from "react";

export function Summary() {
  const { transactionsList } = useContext(TransactionContext);

  const getTotalByType = (type: string) => {
    return transactionsList
      .filter((t) => t.type === type)
      .map((t) => t.price)
      .reduce((acc, price) => acc + price, 0);
  };

  const summary2 = {
    income: getTotalByType("income"),
    outcome: getTotalByType("outcome"),
  };

  const summary = transactionsList.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }
      return acc;
    },
    { income: 0, outcome: 0, total: 0 }
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryCardHeader>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </SummaryCardHeader>

        <SummaryCardBody>
          <span>{summary2.income}</span>
        </SummaryCardBody>
      </SummaryCard>

      <SummaryCard>
        <SummaryCardHeader>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </SummaryCardHeader>

        <SummaryCardBody>
          <span>{summary2.outcome}</span>
        </SummaryCardBody>
      </SummaryCard>

      <SummaryCard variant="green">
        <SummaryCardHeader>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </SummaryCardHeader>

        <SummaryCardBody>
          <span>{summary2.income - summary2.outcome}</span>
        </SummaryCardBody>
      </SummaryCard>
    </SummaryContainer>
  );
}
