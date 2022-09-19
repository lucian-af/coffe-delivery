import CafeAmericano from "../assets/cardapio/Type=Americano.svg";
import CafeExpresso from "../assets/cardapio/Type=Expresso.svg";
import CafeExpressoCremoso from "../assets/cardapio/Type=Expresso Cremoso.svg";
import CafeExpressoGelado from "../assets/cardapio/Type=Café Gelado.svg";
import CafeComLeite from "../assets/cardapio/Type=Café com Leite.svg";
import CafeLatte from "../assets/cardapio/Type=Latte.svg";
import CafeCapuccino from "../assets/cardapio/Type=Capuccino.svg";
import CafeMacchiato from "../assets/cardapio/Type=Macchiato.svg";
import CafeMocaccino from "../assets/cardapio/Type=Mochaccino.svg";
import ChcocolateQuente from "../assets/cardapio/Type=Chocolate Quente.svg";
import CafeCubano from "../assets/cardapio/Type=Cubano.svg";
import CafeHavaiano from "../assets/cardapio/Type=Havaiano.svg";
import CafeArabe from "../assets/cardapio/Type=Árabe.svg";
import CafeIrlandes from "../assets/cardapio/Type=Irlandês.svg";

enum TipoBebida {
  tradicional = "TRADICIONAL",
  com_leite = "COM LEITE",
  gelado = "GELADO",
  especial = "ESPECIAL",
  alcoolico = "ALCOÓLICO",
}

export type Bebida = {
  id: number;
  imagem: string;
  nome: string;
  descricao: string;
  tipo: TipoBebida[];
  valor: number;
};

export type Endereco = {
  cep: number;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export enum FormasPagamento {
  CartaoCredito = "Cartão de Crédito",
  CartaoDebito = "Cartão de Débito",
  Dinheiro = "Dinheiro",
}

export type OpcaoPagamento = {
  formaPagamento: FormasPagamento;
};

export type PedidoItem = {
  id: string;
  bebida: Bebida;
  quantidade: number;
  valorTotal: number;
};

export type Pedido = {
  id: string;
  item: PedidoItem[];
  endereco?: Endereco;
  formaPagamento?: FormasPagamento;
  valorTotal: number;
};

export const bebidas: Bebida[] = [
  {
    id: 1,
    imagem: CafeExpresso,
    nome: "Expresso Tradicional",
    descricao: "O tradicional café feito com água quente e grãos moídos",
    tipo: [TipoBebida.tradicional],
    valor: 2.5,
  },
  {
    id: 2,
    imagem: CafeAmericano,
    nome: "Expresso Americano",
    descricao: "Expresso diluído, menos intenso que o tradicional",
    tipo: [TipoBebida.tradicional],
    valor: 2,
  },
  {
    id: 3,
    imagem: CafeExpressoCremoso,
    nome: "Expresso Cremoso",
    descricao: "Café expresso tradicional com espuma cremosa",
    tipo: [TipoBebida.tradicional],
    valor: 4.2,
  },
  {
    id: 4,
    imagem: CafeExpressoGelado,
    nome: "Expresso Gelado",
    descricao: "Bebida preparada com café expresso e cubos de gelo",
    tipo: [TipoBebida.tradicional, TipoBebida.gelado],
    valor: 4.7,
  },
  {
    id: 5,
    imagem: CafeComLeite,
    nome: "Café com Leite",
    descricao: "Meio a meio de expresso tradicional com leite vaporizado",
    tipo: [TipoBebida.tradicional, TipoBebida.com_leite],
    valor: 5.6,
  },
  {
    id: 6,
    imagem: CafeLatte,
    nome: "Latte",
    descricao:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tipo: [TipoBebida.tradicional, TipoBebida.com_leite],
    valor: 5.8,
  },
  {
    id: 7,
    imagem: CafeCapuccino,
    nome: "Capuccino",
    descricao:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tipo: [TipoBebida.tradicional, TipoBebida.com_leite],
    valor: 6,
  },
  {
    id: 8,
    imagem: CafeMacchiato,
    nome: "Macchiato",
    descricao: "Café expresso misturado com um pouco de leite quente e espuma",
    tipo: [TipoBebida.tradicional, TipoBebida.com_leite],
    valor: 6,
  },
  {
    id: 9,
    imagem: CafeMocaccino,
    nome: "Mocaccino",
    descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
    tipo: [TipoBebida.tradicional, TipoBebida.com_leite],
    valor: 7.4,
  },
  {
    id: 10,
    imagem: ChcocolateQuente,
    nome: "Chocolate Quente",
    descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
    tipo: [TipoBebida.especial, TipoBebida.com_leite],
    valor: 10,
  },
  {
    id: 11,
    imagem: CafeCubano,
    nome: "Cubano",
    descricao:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tipo: [TipoBebida.especial, TipoBebida.alcoolico, TipoBebida.gelado],
    valor: 17.6,
  },
  {
    id: 12,
    imagem: CafeHavaiano,
    nome: "Havaiano",
    descricao: "Bebida adocicada preparada com café e leite de coco",
    tipo: [TipoBebida.especial],
    valor: 16,
  },
  {
    id: 13,
    imagem: CafeArabe,
    nome: "Árabe",
    descricao: "Bebida preparada com grãos de café árabe e especiarias",
    tipo: [TipoBebida.especial],
    valor: 22.5,
  },
  {
    id: 14,
    imagem: CafeIrlandes,
    nome: "Irlandês",
    descricao: "Bebida a base de café, uísque irlandês, açucar e chantilly",
    tipo: [TipoBebida.especial, TipoBebida.alcoolico],
    valor: 38.4,
  },
];

export const formasPagamento: OpcaoPagamento[] = [
  {
    formaPagamento: FormasPagamento.CartaoCredito,
  },
  {
    formaPagamento: FormasPagamento.CartaoDebito,
  },
  {
    formaPagamento: FormasPagamento.Dinheiro,
  },
];
