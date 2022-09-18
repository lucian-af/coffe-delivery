import styled, { css } from "styled-components";

type CardProps = {
  selecionado?: boolean;
};

export const Card = styled.div<CardProps>`
  display: flex;
  align-items: center;

  flex: 1;

  width: 178px;
  height: 51px;

  border-radius: 6px;
  padding: 1rem;

  margin-right: 0.75rem;

  font-size: ${(props) => props.theme["font-12"]};

  text-transform: uppercase;

  background: ${(props) =>
    props.selecionado ? props.theme["purple-300"] : props.theme["gray-300"]};

  color: ${(props) => props.theme["brown-500"]};
  font-weight: 400;

  gap: 0.75rem;

  cursor: pointer;

  ${(props) =>
    props.selecionado &&
    css`
      border: 1px solid ${(props) => props.theme["purple-500"]};
    `}

  ${(props) =>
    !props.selecionado &&
    css`
      &:hover {
        background: ${(props) => props.theme["gray-400"]};
        color: ${(props) => props.theme["brown-700"]};
      }
    `}

  @media only screen and (min-width: 299px) and (max-width: 900px) {
    width: 100%;
  }
`;
