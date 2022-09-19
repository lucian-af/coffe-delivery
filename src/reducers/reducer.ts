import { ActionTypes } from "./actions";
import { Pedido, PedidoItem } from "./../data/data";
import produce from "immer";

export function pedidosReducer(state: Pedido, action: any) {
  switch (action.type) {
    case ActionTypes.ADICIONAR_ITEM: {
      const item = action.payload.item as PedidoItem;
      const indexItemExistente = state.item.findIndex(
        (pedidoItem) => pedidoItem.bebida.id === item.bebida.id
      );

      if (indexItemExistente < 0) {
        return produce(state, (rascunho) => {
          rascunho.item.push({
            ...item,
            quantidade: 1,
            valorTotal: item.quantidade * item.bebida.valor,
          });
          rascunho.valorTotal = rascunho.valorTotal + item.bebida.valor;
        });
      }

      return produce(state, (rascunho) => {
        rascunho.item[indexItemExistente].quantidade =
          rascunho.item[indexItemExistente].quantidade + 1;

        const novaQuantidade = rascunho.item[indexItemExistente].quantidade;
        rascunho.item[indexItemExistente].valorTotal =
          novaQuantidade * rascunho.item[indexItemExistente].bebida.valor;

        rascunho.valorTotal =
          rascunho.valorTotal + rascunho.item[indexItemExistente].bebida.valor;
      });
    }
    default:
      return state;
  }
}
