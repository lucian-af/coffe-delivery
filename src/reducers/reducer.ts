import { ActionTypes } from "./actions";
import { Pedido, PedidoItem } from "./../data/data";
import produce from "immer";

type PedidoState = {
  pedidoItems: PedidoItem[];
  pedido: Pedido;
};

export function pedidosReducer(state: PedidoState, action: any) {
  switch (action.type) {
    case ActionTypes.ADICIONAR_ITEM: {
      const bebida = action.payload.bebida;

      const indexItemExistente = state.pedidoItems.findIndex(
        (pedidoItem) => pedidoItem.bebida.id === bebida.id
      );

      if (indexItemExistente < 0) {
        return produce(state, (rascunho) => {
          rascunho.pedidoItems.push({
            id: new Date().getTime().toString(),
            bebida,
            quantidade: 1,
            valorTotal: bebida.valor,
          });
          if (rascunho.pedido) {
            rascunho.pedido.valorTotal = recalcularTotalPedido(
              rascunho.pedidoItems
            );
          }
        });
      }

      return produce(state, (rascunho) => {
        rascunho.pedidoItems[indexItemExistente].quantidade =
          rascunho.pedidoItems[indexItemExistente].quantidade + 1;

        const novaQuantidade =
          rascunho.pedidoItems[indexItemExistente].quantidade;
        rascunho.pedidoItems[indexItemExistente].valorTotal =
          novaQuantidade *
          rascunho.pedidoItems[indexItemExistente].bebida.valor;

        if (rascunho.pedido) {
          rascunho.pedido.valorTotal = recalcularTotalPedido(
            rascunho.pedidoItems
          );
        }
      });
    }
    case ActionTypes.DIMINUIR_QUANTIDADE_ITEM: {
      const bebida = action.payload.bebida;
      const indexItemExistente = state.pedidoItems.findIndex(
        (pedidoItem) => pedidoItem.bebida.id === bebida.id
      );

      if (indexItemExistente < 0) return state;

      return produce(state, (rascunho) => {
        const item = rascunho.pedidoItems[indexItemExistente];

        if (item.quantidade === 1) {
          rascunho.pedidoItems.splice(indexItemExistente, 1);
        } else {
          rascunho.pedidoItems[indexItemExistente].quantidade =
            item.quantidade - 1;

          const novaQuantidade =
            rascunho.pedidoItems[indexItemExistente].quantidade;
          rascunho.pedidoItems[indexItemExistente].valorTotal =
            novaQuantidade *
            rascunho.pedidoItems[indexItemExistente].bebida.valor;
        }

        if (rascunho.pedido) {
          rascunho.pedido.valorTotal = recalcularTotalPedido(
            rascunho.pedidoItems
          );
        }

        if (rascunho.pedidoItems.length === 0) {
          rascunho.pedido = {} as Pedido;
        }
      });
    }
    case ActionTypes.SELECIONAR_FORMA_PAGAMENTO: {
      return produce(state, (rascunho) => {
        rascunho.pedido.formaPagamento = action.payload.formaPagamento;
      });
    }
    case ActionTypes.REMOVER_ITEM: {
      const bebida = action.payload.bebida;
      const indexItemExistente = state.pedidoItems.findIndex(
        (pedidoItem) => pedidoItem.bebida.id === bebida.id
      );

      if (indexItemExistente < 0) return state;

      return produce(state, (rascunho: PedidoState): PedidoState | any => {
        rascunho.pedidoItems.splice(indexItemExistente, 1);
        rascunho.pedido!.valorTotal = recalcularTotalPedido(
          rascunho.pedidoItems
        );

        if (rascunho.pedidoItems.length === 0) {
          rascunho.pedido = {} as Pedido;
        }
      });
    }
    case ActionTypes.CONFIRMAR_PEDIDO: {
      return produce(state, (rascunho) => {
        rascunho.pedido = {} as Pedido;
        rascunho.pedidoItems = [];
      });
    }
    default:
      return state;
  }
}

function recalcularTotalPedido(pedidoItems: PedidoItem[]): number {
  return pedidoItems.reduce(
    (acc, item) => acc + item.quantidade * item.bebida.valor,
    0
  );
}
