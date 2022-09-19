import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
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
  const [quantidade, setQuantidade] = useState(valor);

  function hanldeAumentar() {
    setQuantidade((state) => state + 1);
    aumentar();
  }

  function handleDiminuir() {
    if (!quantidade) return;
    setQuantidade((state) => state - 1);
    diminuir();
  }

  return (
    <Container height={height}>
      <Action>
        <Minus width={14} onClick={handleDiminuir} />
      </Action>
      <Input>{quantidade}</Input>
      <Action>
        <Plus width={14} onClick={hanldeAumentar} />
      </Action>
    </Container>
  );
}
