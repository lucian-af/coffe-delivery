import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
  }

  @media only screen and (min-width: 299px) and (max-width: 1280px) {
    main {
      flex-direction: column;
      gap: 6rem;
      width: 100%;
    }
    align-items: center;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  background: linear-gradient(
        ${(props) => props.theme["white-100"]},
        ${(props) => props.theme["white-100"]}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["orange-400"]},
        ${(props) => props.theme["purple-500"]}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  padding: 2.5rem;
  gap: 2rem;

  width: 100%;
  max-width: 32rem;
`;

const COLORS = {
  "purple-500": "purple-500",
  "orange-500": "orange-500",
  "orange-700": "orange-700",
} as const;

type InfoProps = {
  backgroundIcon: keyof typeof COLORS;
};

export const Info = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: ${(props) => props.theme["font-16"]};
  line-height: 1.3;
  color: ${(props) => props.theme["brown-500"]};

  span {
    background: ${(props) => props.theme[COLORS[props.backgroundIcon]]};
    color: ${(props) => props.theme["white-100"]};

    border-radius: 50%;
    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
