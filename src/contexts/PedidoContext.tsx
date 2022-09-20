import { createContext, ReactNode, useEffect, useReducer } from "react";
import { Bebida, FormasPagamento, Pedido } from "../data/data";
import {
  adicionarPedidoItemAction,
  diminuirQuantidadePedidoItemAction,
  removerItemAction,
  selecionarFormaPagamentoAction,
} from "../reducers/actions";
import { pedidosReducer } from "../reducers/reducer";

type PedidoContextType = {
  pedido: Pedido;
  adicionarPedidoItem: (bebida: Bebida) => void;
  diminuirQuantidadePedidoItem: (bebida: Bebida) => void;
  removerItem: (bebida: Bebida) => void;
  quantidadeTotalItens: () => number;
  selecionarFormaPagamento: (formaPagamento: FormasPagamento) => void;
  formaPagamentoSelecionada: () => FormasPagamento;
};

export const PedidoContext = createContext({} as PedidoContextType);

type PedidoContextProviderProps = {
  children: ReactNode;
};

export function PedioContextProvider({ children }: PedidoContextProviderProps) {
  const novoPedido: Pedido = {
    id: new Date().getTime().toString(),
    item: [],
    valorTotal: 0,
  };

  const [pedido, dispatch] = useReducer(pedidosReducer, novoPedido, () => {
    const storedPedidoAsJson = localStorage.getItem("@coffe-delivery:1.0.0");

    if (storedPedidoAsJson) {
      return JSON.parse(storedPedidoAsJson);
    }

    return novoPedido;
  });

  function adicionarPedidoItem(bebida: Bebida) {
    dispatch(adicionarPedidoItemAction(bebida));
  }

  function diminuirQuantidadePedidoItem(bebida: Bebida) {
    dispatch(diminuirQuantidadePedidoItemAction(bebida));
  }

  function quantidadeTotalItens(): number {
    return pedido.item?.reduce((acc: number, next) => acc + next.quantidade, 0);
  }

  function formaPagamentoSelecionada(): FormasPagamento {
    return pedido.formaPagamento!;
  }

  function selecionarFormaPagamento(formaPagamento: FormasPagamento): void {
    dispatch(selecionarFormaPagamentoAction(formaPagamento));
  }

  function removerItem(bebida: Bebida): void {
    dispatch(removerItemAction(bebida));
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(pedido);

    localStorage.setItem("@coffe-delivery:1.0.0", stateJSON);
  }, [pedido]);

  return (
    <PedidoContext.Provider
      value={{
        pedido,
        adicionarPedidoItem,
        diminuirQuantidadePedidoItem,
        removerItem,
        quantidadeTotalItens,
        selecionarFormaPagamento,
        formaPagamentoSelecionada,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
}