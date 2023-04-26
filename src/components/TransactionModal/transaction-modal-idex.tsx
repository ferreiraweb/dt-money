import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { ReactNode } from "react";
import {
  Overlay,
  Content,
  Close,
  TransactionButtonType,
  TransactionType,
} from "./transaction-modal.styles";

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
            <X size={24} />
          </Close>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <TransactionType>
              <TransactionButtonType type="button" variant="up" value="up">
                <ArrowCircleUp size={24} />
                <span>Entrada</span>
              </TransactionButtonType>
              <TransactionButtonType type="button" variant="down" value="down">
                <ArrowCircleDown size={24} />
                <span>Saída</span>
              </TransactionButtonType>
            </TransactionType>

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
