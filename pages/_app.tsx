import type { AppProps /*, AppContext */ } from "next/app";
import GlobalStyle from "../styles/GlobalStyles";
import "../styles/font.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
