import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Carrinho, COLORS, TotalItens } from "./styles";

type CarrinhoItemProps = {
  color?: keyof typeof COLORS;
  mostrarTotalItens: boolean;
};

export function CarrinhoItems({
  color,
  mostrarTotalItens = true,
}: CarrinhoItemProps) {
  // TODO: usar context para mostrar total de itens

  const itens = 3;

  const path = itens ? "/checkout" : "/";

  return (
    <NavLink to={path} title="carrinho">
      <Carrinho color={color}>
        <ShoppingCart size={22} weight="fill" />
        <TotalItens
          mostrarTotalItens={mostrarTotalItens}
          title={itens.toString()}
        >
          {itens}
        </TotalItens>
      </Carrinho>
    </NavLink>
  );
}
