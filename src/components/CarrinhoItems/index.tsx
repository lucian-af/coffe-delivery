import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PedidoContext } from "../../contexts/PedidoContext";
import { Carrinho, COLORS, TotalItens } from "./styles";

type CarrinhoItemProps = {
  color?: keyof typeof COLORS;
  mostrarTotalItens?: boolean;
};

export function CarrinhoItems({
  color,
  mostrarTotalItens = true,
}: CarrinhoItemProps) {
  const { quantidadeTotalItens: quantidadeItens } = useContext(PedidoContext);

  const itens = quantidadeItens();
  const mostrarQuantidade = mostrarTotalItens && itens > 0;
  const path = itens ? "/checkout" : "/";

  return (
    <NavLink to={path} title="carrinho">
      <Carrinho color={color}>
        <ShoppingCart size={22} weight="fill" />
        <TotalItens
          mostrarTotalItens={mostrarQuantidade}
          title={itens.toString()}
        >
          {itens}
        </TotalItens>
      </Carrinho>
    </NavLink>
  );
}
