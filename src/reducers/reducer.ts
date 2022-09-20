import { ActionTypes } from "./actions";
import { Pedido, PedidoItem } from "./../data/data";
import produce from "immer";

export function pedidosReducer(state: Pedido, action: any) {
  switch (action.type) {
    case ActionTypes.ADICIONAR_ITEM: {
      const bebida = action.payload.bebida;
      const indexItemExistente = state.item.findIndex(
        (pedidoItem) => pedidoItem.bebida.id === bebida.id
      );

      if (indexItemExistente < 0) {
        return produce(state, (rascunho) => {
          rascunho.item.push({
            id: new Date().getTime().toString(),
            bebida,
            quantidade: 1,
            valorTotal: bebida.valor,
          });
          rascunho.valorTotal = recalcularTotalPedido(rascunho);
        });
      }

      return produce(state, (rascunho) => {
        rascunho.item[indexItemExistente].quantidade =
          rascunho.item[indexItemExistente].quantidade + 1;

        const novaQuantidade = rascunho.item[indexItemExistente].quantidade;
        rascunho.item[indexItemExistente].valorTotal =
          novaQuantidade * rascunho.item[indexItemExistente].bebida.valor;

        rascunho.valorTotal = recalcularTotalPedido(rascunho);
      });
    }
    case ActionTypes.DIMINUIR_QUANTIDADE_ITEM: {
      const bebida = action.payload.bebida;
      const indexItemExistente = state.item.findIndex(
        (pedidoItem) => pedidoItem.bebida.id === bebida.id
      );

      if (indexItemExistente < 0) return state;

      return produce(state, (rascunho) => {
        const item = rascunho.item[indexItemExistente];

        if (item.quantidade === 1) {
          rascunho.item.splice(indexItemExistente, 1);
        } else {
          rascunho.item[indexItemExistente].quantidade = item.quantidade - 1;

          const novaQuantidade = rascunho.item[indexItemExistente].quantidade;
          rascunho.item[indexItemExistente].valorTotal =
            novaQuantidade * rascunho.item[indexItemExistente].bebida.valor;
        }

        rascunho.valorTotal = recalcularTotalPedido(rascunho);
      });
    }
    case ActionTypes.SELECIONAR_FORMA_PAGAMENTO: {
      return produce(state, (rascunho) => {
        rascunho.formaPagamento = action.payload.formaPagamento;
      });
    }
    case ActionTypes.REMOVER_ITEM: {
      const bebida = action.payload.bebida;
      const indexItemExistente = state.item.findIndex(
        (pedidoItem) => pedidoItem.bebida.id === bebida.id
      );

      if (indexItemExistente < 0) return state;

      return produce(state, (rascunho) => {
        rascunho.item.splice(indexItemExistente, 1);
        rascunho.valorTotal = recalcularTotalPedido(rascunho);
      });
    }
    default:
      return state;
  }
}

function recalcularTotalPedido(pedido: Pedido): number {
  return pedido.item.reduce(
    (acc, item) => acc + item.quantidade * item.bebida.valor,
    0
  );
}
