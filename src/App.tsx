import { ThemeProvider } from "styled-components";
import { Transaction } from "./pages/Transactions/Transactions.index";
import { GlobalStyel } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transaction />
      <GlobalStyel />
    </ThemeProvider>
  );
}
