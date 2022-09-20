import { ButtonHTMLAttributes, ReactElement, useContext } from "react";
import { PedidoContext } from "../../../../contexts/PedidoContext";
import { FormasPagamento } from "../../../../data/data";
import { Card } from "./styles";

interface FormaPagamentoProps extends ButtonHTMLAttributes<HTMLDivElement> {
  descricao: string;
  formaPagamento: FormasPagamento;
  children: ReactElement;
}

export function FormaPagamento({
  descricao,
  children,
  formaPagamento,
  ...rest
}: FormaPagamentoProps) {
  const { formaPagamentoSelecionada } = useContext(PedidoContext);

  return (
    <Card
      selecionado={formaPagamentoSelecionada() === formaPagamento}
      {...rest}
    >
      {children}
      <span>{descricao}</span>
    </Card>
  );
}
