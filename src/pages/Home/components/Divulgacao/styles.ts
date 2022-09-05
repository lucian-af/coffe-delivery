import styled from "styled-components";

export const DivulgacaoContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  order: 1;

  @media only screen and (max-width: 1400px) {
    order: 2;

    text-align: center;
    align-items: center;
  }
`;

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    line-height: 1.3;
    font-size: ${(props) => props.theme["font-48"]};
  }

  p {
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme["font-20"]};
    line-height: 1.3;
    font-weight: 400;
  }
`;

export const BannerImg = styled.img`
  width: 476px;
  height: 360px;
  order: 2;

  @media only screen and (max-width: 1400px) {
    order: 1;
  }

  @media only screen and (max-width: 599px) {
    width: 100%;
    height: 260px;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 1.25rem;
  text-align: start;

  @media only screen and (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

export const Vantagem = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  gap: 0.75rem;

  font-size: ${(props) => props.theme["font-16"]};
  font-weight: 400;
  line-height: 1.3;

  span {
    display: flex;
    width: 32px;
    padding: 0.5rem;
    border-radius: 50%;

    background: ${(props) => props.color};
    color: ${(props) => props.theme.white};
  }
`;
