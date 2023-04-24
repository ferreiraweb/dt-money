import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/home-index";
import { GlobalStyel } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyel />
    </ThemeProvider>
  );
}
