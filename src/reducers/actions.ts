import { Bebida, Endereco, FormasPagamento } from "./../data/data";
export enum ActionTypes {
  ADICIONAR_ITEM = "ADICIONAR_ITEM",
  DIMINUIR_QUANTIDADE_ITEM = "DIMINUIR_QUANTIDADE_ITEM",
  SELECIONAR_FORMA_PAGAMENTO = "SELECIONAR_FORMA_PAGAMENTO",
  REMOVER_ITEM = "REMOVER_ITEM",
  ADICIONAR_ENDERECO = "ADICIONAR_ENDERECO",
}

export function adicionarPedidoItemAction(bebida: Bebida) {
  return {
    type: ActionTypes.ADICIONAR_ITEM,
    payload: {
      bebida,
    },
  };
}

export function diminuirQuantidadePedidoItemAction(bebida: Bebida) {
  return {
    type: ActionTypes.DIMINUIR_QUANTIDADE_ITEM,
    payload: {
      bebida,
    },
  };
}

export function selecionarFormaPagamentoAction(
  formaPagamento: FormasPagamento
) {
  return {
    type: ActionTypes.SELECIONAR_FORMA_PAGAMENTO,
    payload: {
      formaPagamento,
    },
  };
}

export function removerItemAction(bebida: Bebida) {
  return {
    type: ActionTypes.REMOVER_ITEM,
    payload: {
      bebida,
    },
  };
}

export function adicionarEnderecoAction(endereco: Endereco) {
  return {
    type: ActionTypes.ADICIONAR_ENDERECO,
    payload: {
      endereco,
    },
  };
}
