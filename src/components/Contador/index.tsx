import { Minus, Plus } from "phosphor-react";
import { Action, Container, Input } from "./styles";

type ContadorProps = {
  valor?: number;
  height?: string;
  aumentar: () => void;
  diminuir: () => void;
};

export function Contador({
  valor = 0,
  height = "38px",
  aumentar,
  diminuir,
}: ContadorProps) {
  function hanldeAumentar() {
    aumentar();
  }

  function handleDiminuir() {
    diminuir();
  }

  return (
    <Container height={height}>
      <Action>
        <Minus width={14} onClick={handleDiminuir} />
      </Action>
      <Input>{valor}</Input>
      <Action>
        <Plus width={14} onClick={hanldeAumentar} />
      </Action>
    </Container>
  );
}
