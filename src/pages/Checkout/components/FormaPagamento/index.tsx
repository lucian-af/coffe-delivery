import { ReactElement } from "react";
import { Card } from "./styles";

type FormaPagamentoProps = {
  descricao: string;
  selecionada?: boolean;
  children: ReactElement;
};

export function FormaPagamento({
  descricao,
  selecionada = false,
  children,
}: FormaPagamentoProps) {
  return (
    <Card selecionado={selecionada}>
      {children}
      <span>{descricao}</span>
    </Card>
  );
}
