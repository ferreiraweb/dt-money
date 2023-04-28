import { HeaderContainer } from "./header-styles";
import { HeaderContent } from "./header-styles";
import logoImg from "../../assets/Logo.svg";
import { TransactionModal } from "../TransactionModal/transaction-modal-idex";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo Ignite" />

        <TransactionModal title="Nova Transação">
          <button>Nova transação</button>
        </TransactionModal>
      </HeaderContent>
    </HeaderContainer>
  );
}
