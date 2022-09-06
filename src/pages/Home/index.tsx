import {
  Cardapio,
  Descricao,
  Etiqueta,
  HomeContainer,
  Imagem,
  ListaEtiquetas,
  ListaOpcoes,
  Opcao,
  OpcaoEscolher,
  Preco,
} from "./styles";
import { ShoppingCart } from "phosphor-react";
import { Divulgacao } from "./components/Divulgacao";
import CafeAmericano from "../../assets/cardapio/Type=Americano.svg";
import CafeExpresso from "../../assets/cardapio/Type=Expresso.svg";
import CafeExpressoCremoso from "../../assets/cardapio/Type=Expresso Cremoso.svg";
import CafeExpressoGelado from "../../assets/cardapio/Type=Café Gelado.svg";
import CafeCubano from "../../assets/cardapio/Type=Cubano.svg";

enum TipoCafe {
  tradicional = "TRADICIONAL",
  com_leite = "COM LEITE",
  gelado = "GELADO",
  especial = "ESPECIAL",
  alcoolico = "ALCOÓLICO",
}

type Cafe = {
  id: string;
  imagem: string;
  nome: string;
  descricao: string;
  tipo: TipoCafe[];
  valor: number;
};

const cafes: Cafe[] = [
  {
    id: new Date(1).getTime().toString(),
    imagem: CafeExpresso,
    nome: "Expresso Tradicional",
    descricao: "O tradicional café feito com água quente e grãos moídos",
    tipo: [TipoCafe.tradicional],
    valor: 6,
  },
  {
    id: new Date(2).getTime().toString(),
    imagem: CafeAmericano,
    nome: "Expresso Americano",
    descricao: "Expresso diluído, menos intenso que o tradicional",
    tipo: [TipoCafe.tradicional],
    valor: 9.9,
  },
  {
    id: new Date(3).getTime().toString(),
    imagem: CafeExpressoCremoso,
    nome: "Expresso Cremoso",
    descricao: "Café expresso tradicional com espuma cremosa",
    tipo: [TipoCafe.tradicional],
    valor: 14.5,
  },
  {
    id: new Date(4).getTime().toString(),
    imagem: CafeExpressoGelado,
    nome: "Expresso Gelado",
    descricao: "Bebida preparada com café expresso e cubos de gelo",
    tipo: [TipoCafe.tradicional, TipoCafe.gelado],
    valor: 11.7,
  },
  {
    id: new Date(5).getTime().toString(),
    imagem: CafeCubano,
    nome: "Cubano",
    descricao:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tipo: [TipoCafe.especial, TipoCafe.alcoolico, TipoCafe.gelado],
    valor: 17.6,
  },
];

export function Home() {
  function currencyFormatter(value: number) {
    if (!Number(value)) return "";

    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
      .format(value)
      .replace("R$", "");

    return `${amount}`;
  }

  return (
    <HomeContainer>
      <Divulgacao />

      <Cardapio>
        <h2>Nossos cafés</h2>
        <ListaOpcoes>
          {cafes.map((cafe) => {
            return (
              <Opcao key={cafe.id}>
                <Imagem>
                  <img src={cafe.imagem} alt="" width={120} height={120} />
                  <ListaEtiquetas>
                    {cafe.tipo.map((tipo) => {
                      return <Etiqueta key={tipo}>{tipo}</Etiqueta>;
                    })}
                  </ListaEtiquetas>
                </Imagem>

                <Descricao>
                  <h1>{cafe.nome}</h1>
                  <span>{cafe.descricao}</span>
                </Descricao>

                <OpcaoEscolher>
                  <Preco>
                    <span>{currencyFormatter(cafe.valor)}</span>
                  </Preco>
                  <form action="">
                    <input
                      type="number"
                      placeholder="0"
                      step={1}
                      min={0}
                      max={60}
                    />
                    <button type="submit">
                      <ShoppingCart width={22} />
                    </button>
                  </form>
                </OpcaoEscolher>
              </Opcao>
            );
          })}
        </ListaOpcoes>
      </Cardapio>
    </HomeContainer>
  );
}
