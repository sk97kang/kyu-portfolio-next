import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif
  }
  html {
      scroll-behavior: smooth;
  }
  section {
    padding: 100px;
  }
  @media (max-width: 991px) {
    section {
    padding: 100px 50px;
  }
  }
  @media (max-width: 600px) {
    section {
        padding: 100px 20px;
    }
  }
`;

export default GlobalStyle;
