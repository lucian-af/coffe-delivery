import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Action, Container, Input } from "./styles";

type ContadorProps = {
  valor?: number;
  height?: string;
};

export function Contador({ valor = 0, height = "38px" }: ContadorProps) {
  const [quantidade, setQuantidade] = useState(valor);

  function aumentar() {
    setQuantidade((state) => state + 1);
  }

  function diminuir() {
    if (!quantidade) return;
    setQuantidade((state) => state - 1);
  }

  return (
    <Container height={height}>
      <Action>
        <Minus width={14} onClick={diminuir} />
      </Action>
      <Input>{quantidade}</Input>
      <Action>
        <Plus width={14} onClick={aumentar} />
      </Action>
    </Container>
  );
}
