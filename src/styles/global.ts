import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["white-100"]};
    color: ${(props) => props.theme["brown-500"]};
    -webkit-font-smoothing: antialiased;    
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme["font-16"]};
  }
`;
