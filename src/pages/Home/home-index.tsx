import { Header } from "../../components/Header/header-index";
import { Summary } from "../../components/summary/summary-index";
import { Transactions } from "../../components/Transactions/transactions-index";

export function Home() {
  return (
    <>
      <Header />
      <Summary />
      <Transactions />
    </>
  );
}
