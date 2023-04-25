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

        {/* <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>Nova transação</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>
              <Dialog.Description>
                Modal para incluir/editar nova transação
              </Dialog.Description>

              <Dialog.Close>
                <X size={24} />
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root> */}
      </HeaderContent>
    </HeaderContainer>
  );
}
