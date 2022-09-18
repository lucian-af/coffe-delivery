import styled, { css } from "styled-components";

export const COLORS = {
  "purple-700": "purple-700",
  "orange-300": "orange-300",
} as const;

type CarrinhoProps = {
  color?: keyof typeof COLORS;
};

export const Carrinho = styled.span<CarrinhoProps>`
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  transition: background-color 0.2s;

  ${(props) => {
    switch (props.color) {
      case COLORS["purple-700"]:
        return css`
          background: ${(props) => props.theme["purple-700"]};
          color: ${(props) => props.theme["gray-100"]};

          &:hover {
            background: ${(props) => props.theme["purple-500"]};
          }
        `;
      default:
        return css`
          background: ${(props) => props.theme["orange-300"]};
          color: ${(props) => props.theme["orange-700"]};
        `;
    }
  }}

  position: relative;
`;

type TotalItensProps = {
  mostrarTotalItens: boolean;
};

export const TotalItens = styled.div<TotalItensProps>`
  ${(props) =>
    props.mostrarTotalItens
      ? css`
          position: absolute;
          border-radius: 50%;
          background: ${(props) => props.theme["orange-700"]};

          width: 20px;
          height: 20px;

          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;

          top: -8px;
          right: -8.35px;

          font-size: ${(props) => props.theme["font-12"]};
          font-weight: 700;
          color: ${(props) => props.theme.white};
          letter-spacing: -0.06em;

          text-overflow: ellipsis;
        `
      : css`
          display: none;
        `}
`;
