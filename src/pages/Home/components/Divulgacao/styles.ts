import styled from "styled-components";

export const DivulgacaoContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 5.75rem 0;

  position: relative;

  @media only screen and (max-width: 1366px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Filter = styled.div`
  position: absolute;

  background-image: linear-gradient(
    to left,
    ${(props) => props.theme["orange-400"]},
    ${(props) => props.theme["purple-500"]}
  );

  opacity: 0.12;
  filter: blur(3rem);

  width: 100%;
  height: calc(100% - 160px);
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  order: 1;

  @media only screen and (max-width: 1366px) {
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
    font-family: ${(props) => props.theme["font-special"]};
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

  @media only screen and (max-width: 1366px) {
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
