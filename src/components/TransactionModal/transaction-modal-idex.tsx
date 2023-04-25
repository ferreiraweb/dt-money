import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { ReactNode } from "react";
import { Overlay, Content, Close } from "./transaction-modal.styles";

interface ITransactionModalProps {
  children: ReactNode;
  title?: string;
}

export function TransactionModal({
  children,
  title = "Sem titulo",
}: ITransactionModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>{title}</Dialog.Title>

          <Close>
            {" "}
            <X size={24} />
          </Close>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
