import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PedioContextProvider } from "./contexts/PedidoContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PedioContextProvider>
          <Router />
        </PedioContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
