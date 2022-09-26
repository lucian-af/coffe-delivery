import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  Bebida,
  FormasPagamento,
  Pedido,
  PedidoConfirmacao,
  PedidoItem,
} from "../data/data";
import {
  adicionarPedidoItemAction,
  confirmarPedidoAction,
  diminuirQuantidadePedidoItemAction,
  removerItemAction,
  selecionarFormaPagamentoAction,
} from "../reducers/actions";
import { pedidosReducer } from "../reducers/reducer";

type EnderecoData = {
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
};

type PedidoContextType = {
  pedidoItems: PedidoItem[];
  pedido: Pedido;
  pedidoConfirmado: PedidoConfirmacao | undefined;
  adicionarPedidoItem: (bebida: Bebida) => void;
  diminuirQuantidadePedidoItem: (bebida: Bebida) => void;
  removerItem: (bebida: Bebida) => void;
  quantidadeTotalItens: () => number;
  selecionarFormaPagamento: (formaPagamento: FormasPagamento) => void;
  formaPagamentoSelecionada: () => FormasPagamento;
  confirmarPedido: (endereco: EnderecoData) => void;
};

export const PedidoContext = createContext({} as PedidoContextType);

type PedidoContextProviderProps = {
  children: ReactNode;
};

export function PedioContextProvider({ children }: PedidoContextProviderProps) {
  const [pedidoState, dispatch] = useReducer(
    pedidosReducer,
    {
      pedidoItems: [],
      pedido: {} as Pedido,
    },
    () => {
      const storedPedidoAsJson = localStorage.getItem("@coffe-delivery:1.0.0");

      if (storedPedidoAsJson) {
        return JSON.parse(storedPedidoAsJson);
      }

      return {
        pedidoItems: [],
        pedido: {} as Pedido,
      };
    }
  );

  const { pedidoItems, pedido } = pedidoState;

  const [pedidoConfirmado, setPedidoConfirmado] = useState(
    {} as PedidoConfirmacao
  );

  function adicionarPedidoItem(bebida: Bebida) {
    dispatch(adicionarPedidoItemAction(bebida));
  }

  function diminuirQuantidadePedidoItem(bebida: Bebida) {
    dispatch(diminuirQuantidadePedidoItemAction(bebida));
  }

  function quantidadeTotalItens(): number {
    return (
      pedidoItems.reduce(
        (acc: number, next: PedidoItem) => acc + next.quantidade,
        0
      ) ?? 0
    );
  }

  function formaPagamentoSelecionada(): FormasPagamento {
    return pedido?.formaPagamento!;
  }

  function selecionarFormaPagamento(formaPagamento: FormasPagamento): void {
    dispatch(selecionarFormaPagamentoAction(formaPagamento));
  }

  function removerItem(bebida: Bebida): void {
    dispatch(removerItemAction(bebida));
  }

  function confirmarPedido(endereco: EnderecoData): void {
    setPedidoConfirmado({
      endereco,
      formaPagamento: pedido.formaPagamento,
    } as PedidoConfirmacao);

    dispatch(confirmarPedidoAction());
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(pedidoState);
    localStorage.setItem("@coffe-delivery:1.0.0", stateJSON);
  }, [pedidoState]);

  return (
    <PedidoContext.Provider
      value={{
        pedidoItems,
        pedido,
        pedidoConfirmado,
        adicionarPedidoItem,
        diminuirQuantidadePedidoItem,
        removerItem,
        quantidadeTotalItens,
        selecionarFormaPagamento,
        formaPagamentoSelecionada,
        confirmarPedido,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
}
