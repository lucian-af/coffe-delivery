import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Action, Container, Input } from "./styles";

export function Contador() {
  const [quantidade, setQuantidade] = useState(0);

  function aumentar() {
    setQuantidade((state) => state + 1);
  }

  function diminuir() {
    if (!quantidade) return;
    setQuantidade((state) => state - 1);
  }

  return (
    <Container>
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
