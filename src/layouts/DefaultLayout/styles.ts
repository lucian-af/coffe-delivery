import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 10rem 2rem;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 599px) {
    padding: 0 1rem 2rem;
  }
`;
