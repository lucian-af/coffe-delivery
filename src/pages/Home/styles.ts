import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5.75rem 0;

  @media only screen and (max-width: 599px) {
    padding: 0;
  }

  @media only screen and (max-width: 1400px) {
    align-items: center;
    gap: 3rem;
  }
`;
