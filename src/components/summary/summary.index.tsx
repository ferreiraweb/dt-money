import {
  SummaryCard,
  SummaryCardBody,
  SummaryCardHeader,
  SummaryContainer,
} from "./summary.styles";

import {
  ArrowCircleUp,
  ArrowCircleDown,
  Money,
  CurrencyDollar,
} from "phosphor-react";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryCardHeader>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </SummaryCardHeader>

        <SummaryCardBody>
          <span>R$ 17.400,00</span>
        </SummaryCardBody>
      </SummaryCard>

      <SummaryCard>
        <SummaryCardHeader>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </SummaryCardHeader>

        <SummaryCardBody>
          <span>R$ 1.259,00</span>
        </SummaryCardBody>
      </SummaryCard>

      <SummaryCard variant="green">
        <SummaryCardHeader>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </SummaryCardHeader>

        <SummaryCardBody>
          <span>R$ 17.400,00</span>
        </SummaryCardBody>
      </SummaryCard>
    </SummaryContainer>
  );
}
