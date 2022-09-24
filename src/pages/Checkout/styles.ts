import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 2rem auto;

  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;

  form {
    display: contents;
  }

  @media only screen and (min-width: 299px) and (max-width: 1366px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
  }
`;

export const Article = styled.article`
  width: 36rem;

  @media only screen and (min-width: 299px) and (max-width: 900px) {
    width: 100%;
  }

  @media only screen and (min-width: 901px) {
    width: 47rem;
  }
`;

export const Aside = styled.aside`
  width: 28rem;

  @media only screen and (min-width: 299px) and (max-width: 900px) {
    width: 100%;
  }

  @media only screen and (min-width: 901px) and (max-width: 1280px) {
    width: 33rem;
  }
`;

export const Titulo = styled.h1`
  font-size: ${(props) => props.theme["font-18"]};
  font-weight: 700;
  line-height: 1.5;

  font-family: ${(props) => props.theme["font-special"]};
  color: ${(props) => props.theme["brown-700"]};

  margin-bottom: 1rem;
`;

export const SubTitulo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;

  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: ${(props) => props.theme["font-14"]};
    color: ${(props) => props.theme["brown-500"]};
    line-height: 1.3;

    h2 {
      font-size: ${(props) => props.theme["font-16"]};
      font-weight: 400;
      line-height: 1.3;

      color: ${(props) => props.theme["brown-700"]};
    }
  }
`;

const Base = styled.div`
  border-radius: 6px;

  background: ${(props) => props.theme["gray-100"]};

  padding: 2.5rem;
`;

export const Endereco = styled(Base)``;

export const Pagamento = styled(Base)`
  margin-top: 0.75rem;
`;

export const Items = styled(Base)`
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

export const CardsPagamento = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  gap: 0.75rem;

  @media only screen and (min-width: 299px) and (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  height: 46px;
  padding: 0.75rem 0.5rem;
  text-transform: uppercase;

  background: ${(props) => props.theme["orange-500"]};
  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme["font-14"]};
  font-weight: 700;
  line-height: 1.3;

  cursor: pointer;

  &:not(:disabled):hover {
    background: ${(props) => props.theme["orange-700"]};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["brown-300"]};
  }
`;

const FONT_SIZE = {
  font_16: "font-16",
  font_20: "font-20",
} as const;

type ResumoProps = {
  size: keyof typeof FONT_SIZE;
  weight: number;
  color?: string;
};

export const Resumo = styled.div<ResumoProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  font-size: ${(props) => props.theme[FONT_SIZE[props.size]]};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color ?? props.theme["brown-500"]};

  padding-bottom: 0.75rem;

  h5 {
    font-size: ${(props) => props.theme["font-14"]};
    font-weight: 400;
  }

  &:last-child {
    padding: 0;
  }
`;
