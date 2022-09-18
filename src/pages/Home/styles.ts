import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  user-select: none;

  @media only screen and (max-width: 599px) {
    padding: 0;
  }

  @media only screen and (max-width: 1366px) {
    gap: 3rem;
  }
`;

export const Cardapio = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  @media only screen and (max-width: 1366px) {
    h2 {
      text-align: center;
    }
  }
`;

export const ListaOpcoes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  gap: 2.5rem 2rem;

  @media only screen and (min-width: 1367px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (max-width: 1366px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 599px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`;

export const Opcao = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme["gray-100"]};
  border-radius: 6px 36px 6px 36px;

  width: 256px;
  height: 310px;
`;

export const Imagem = styled.header`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 0.5rem;

  margin-top: calc(0px - 1rem - 8px);
  margin-bottom: 1rem;
`;

export const ListaEtiquetas = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const Etiqueta = styled.span`
  padding: 0.25rem 0.5rem;
  height: 21px;

  background: ${(props) => props.theme["orange-300"]};
  color: ${(props) => props.theme["orange-700"]};

  font-size: ${(props) => props.theme["font-10"]};
  font-weight: 700;
  line-height: 1.3;

  border-radius: 100px;
`;

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.25rem 1.8rem;
  gap: 0.5rem;

  h1 {
    font-family: ${(props) => props.theme["font-special"]};
    font-size: ${(props) => props.theme["font-20"]};
    color: ${(props) => props.theme["brown-700"]};
    font-weight: 700;

    text-align: center;
    line-height: 1.3;
  }

  span {
    font-size: ${(props) => props.theme["font-14"]};
    color: ${(props) => props.theme["brown-300"]};
    font-weight: 400;

    text-align: center;
    line-height: 1.3;
  }
`;

export const OpcaoEscolher = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1.5rem;

  form {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Preco = styled.div`
  font-family: ${(props) => props.theme["font-special"]};
  font-size: ${(props) => props.theme["font-24"]};
  font-weight: 800;
  line-height: 1.3;

  color: ${(props) => props.theme["brown-500"]};

  &::before {
    content: "R$";

    font-family: "Roboto", sans-serif;
    font-size: ${(props) => props.theme["font-14"]};
    font-weight: 400;

    line-height: 1.3;
  }
`;
