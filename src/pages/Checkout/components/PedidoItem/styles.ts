import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: flex-start;

  div:nth-child(2n) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: ${(props) => props.theme["brown-700"]};

    div {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
  }

  img {
    width: 64px;
    height: 64px;
    margin-right: 1.25rem;
  }
`;

export const Remover = styled.button`
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme["gray-300"]};

  width: 91px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;

  font-size: ${(props) => props.theme["font-12"]};
  color: ${(props) => props.theme["brown-500"]};
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["brown-700"]};
  }
`;

export const ValorItem = styled.span`
  font-size: ${(props) => props.theme["font-16"]};
  font-weight: 700;
  text-align: right;

  color: ${(props) => props.theme["brown-500"]};
`;
