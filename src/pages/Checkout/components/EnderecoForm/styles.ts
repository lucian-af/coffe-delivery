import { ReactNode } from "react";
import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  gap: 0.75rem;

  @media only screen and (min-width: 299px) and (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

type InputProps = {
  sizeInput?: string;
};

export const Input = styled.div<InputProps>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.sizeInput
      ? css<InputProps>`
          width: ${(props) => props.sizeInput};
        `
      : css`
          flex: 1;
        `}

  @media only screen and (min-width: 299px) and (max-width: 900px) {
    width: 100%;
  }

  div {
    display: inline-flex;
    position: relative;
  }

  input {
    border: 1px solid ${(props) => props.theme["gray-300"]};

    color: ${(props) => props.theme["brown-300"]};
    background: ${(props) => props.theme["gray-200"]};

    padding: 0.675rem;
    border-radius: 4px;

    width: 100%;

    :not(:placeholder-shown) {
      color: ${(props) => props.theme["brown-500"]};
    }
  }

  small {
    padding: 0.5rem 0 0 0.5rem;
    color: ${(props) => props.theme.danger};
  }
`;

type OpcionalProps = {
  hidden?: boolean;
};

export const Opcional = styled.span<OpcionalProps>`
  position: absolute;
  color: ${(props) => props.theme["brown-300"]};
  font-size: ${(props) => props.theme["font-12"]};
  font-style: italic;

  right: 0.75rem;
  align-self: center;

  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;
