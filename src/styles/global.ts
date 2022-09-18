import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    user-select: none;
  }

  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme["orange-500"]};
  }

  body {
    background: ${(props) => props.theme["white-100"]};
    color: ${(props) => props.theme["brown-500"]};
    -webkit-font-smoothing: antialiased;    
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme["font-default"]};
    font-weight: 400;
    font-size: ${(props) => props.theme["font-16"]};
  }
`;
