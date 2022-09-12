import styled from "styled-components";

export const Container = styled.div`
  width: 72px;
  height: 38px;

  border-radius: 6px;
  padding: 0.5rem;

  background: ${(props) => props.theme["gray-300"]};

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;
`;

export const Input = styled.span`
  width: 20px;
  height: 21px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  text-align: center;

  font-size: ${(props) => props.theme["font-16"]};
  font-weight: 400;
  line-height: 1.3;

  background: transparent;

  color: ${(props) => props.theme["brown-900"]};
`;

export const Action = styled.span`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme["purple-500"]};

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme["purple-700"]};
  }
`;
