import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const BaseLink = styled.span`
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
`;

export const UserLocation = styled(BaseLink)`
  font-size: ${(props) => props.theme["font-14"]};
  background: ${(props) => props.theme["purple-300"]};
  color: ${(props) => props.theme["purple-500"]};

  span {
    color: ${(props) => props.theme["purple-700"]};
  }
`;

export const Checkout = styled(BaseLink)`
  background: ${(props) => props.theme["orange-300"]};
  color: ${(props) => props.theme["orange-700"]};
`;
