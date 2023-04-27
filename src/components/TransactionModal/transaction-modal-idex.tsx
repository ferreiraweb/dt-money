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

import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface ITransactionModalProps {
  children: ReactNode;
  title?: string;
}

const formTransactionSchema = zod.object({
  description: zod.string().max(200, "máximo 200 caracteres"),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"]),
});

type formTransactionType = zod.infer<typeof formTransactionSchema>;

export function TransactionModal({
  children,
  title = "Sem titulo",
}: ITransactionModalProps) {
  const { register, handleSubmit, formState, reset } =
    useForm<formTransactionType>({
      resolver: zodResolver(formTransactionSchema),
      defaultValues: {
        description: "x",
        price: 0,
        category: "y",
      },
    });

  async function handleFormTransaction(data: formTransactionType) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(data);
    //reset();
  }

  console.log(formState.errors);

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

          <form action="" onSubmit={handleSubmit(handleFormTransaction)}>
            <input
              {...register("description")}
              type="text"
              placeholder="Descrição"
              required
            />
            <input
              {...register("price", { valueAsNumber: true })}
              type="number"
              placeholder="Preço"
              required
            />
            <input
              {...register("category")}
              type="text"
              placeholder="Categoria"
              required
            />

            <TransactionType>
              <TransactionButtonType
                type="button"
                variant="income"
                value="income"
                {...register("type")}
              >
                <ArrowCircleUp size={24} />
                <span>Entrada</span>
              </TransactionButtonType>
              <TransactionButtonType
                type="button"
                variant="outcome"
                value="outcome"
                {...register("type")}
              >
                <ArrowCircleDown size={24} />
                <span>Saída</span>
              </TransactionButtonType>
            </TransactionType>

            <button type="submit" disabled={formState.isSubmitting}>
              Cadastrar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
