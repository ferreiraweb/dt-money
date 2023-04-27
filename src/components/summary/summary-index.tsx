import {
  SummaryCard,
  SummaryCardBody,
  SummaryCardHeader,
  SummaryContainer,
} from "./summary-styles";

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useSummary } from "../../hooks/useSummary";
import { formatCurrency } from "../../utils/formatter";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryCardHeader>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </SummaryCardHeader>

        <SummaryCardBody>
          <span>{formatCurrency(summary.income)}</span>
        </SummaryCardBody>
      </SummaryCard>

      <SummaryCard>
        <SummaryCardHeader>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </SummaryCardHeader>

        <SummaryCardBody>
          <span>{formatCurrency(summary.outcome)}</span>
        </SummaryCardBody>
      </SummaryCard>

      <SummaryCard variant="green">
        <SummaryCardHeader>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </SummaryCardHeader>

        <SummaryCardBody>
          <span>{formatCurrency(summary.total)}</span>
        </SummaryCardBody>
      </SummaryCard>
    </SummaryContainer>
  );
}
