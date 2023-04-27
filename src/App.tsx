import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/home-index";
import { GlobalStyel } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { TransactionContextProvider } from "./contexts/transaction-context";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionContextProvider>
        <Home />
      </TransactionContextProvider>
      <GlobalStyel />
    </ThemeProvider>
  );
}
