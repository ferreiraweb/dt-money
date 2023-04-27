import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./search-form-styles";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function SearchForm() {
  const formSchema = zod.object({
    search: zod.string().max(30),
  });

  type formSearchType = zod.infer<typeof formSchema>;

  const { register, handleSubmit, formState } = useForm<formSearchType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "x",
    },
  });

  async function handleSubmitSearch(data: formSearchType) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitSearch)}>
      <input
        {...register("search")}
        type="text"
        placeholder="busca por transações"
      />
      <button type="submit" disabled={formState.isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
