import { PedidoItem } from "./../data/data";
export enum ActionTypes {
  ADICIONAR_ITEM = "ADICIONAR_ITEM",
}

export function adicionarPedidoItem(item: PedidoItem) {
  return {
    type: ActionTypes.ADICIONAR_ITEM,
    payload: {
      item,
    },
  };
}
