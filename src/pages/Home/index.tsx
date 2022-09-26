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
  Action,
} from "./styles";
import { Divulgacao } from "./components/Divulgacao";
import { Contador } from "../../components/Contador";
import { currencyFormatterBR } from "../../helpers/CurrencyFormatter";
import { CarrinhoItems } from "../../components/CarrinhoItems";
import { Bebida, bebidas } from "../../data/data";
import { useContext } from "react";
import { PedidoContext } from "../../contexts/PedidoContext";

export function Home() {
  const { pedidoItems, adicionarPedidoItem, diminuirQuantidadePedidoItem } =
    useContext(PedidoContext);

  function handleAdicionarItem(bebida: Bebida) {
    adicionarPedidoItem(bebida);
  }

  function handleRemoverItem(bebida: Bebida) {
    diminuirQuantidadePedidoItem(bebida);
  }

  return (
    <HomeContainer>
      <Divulgacao />

      <Cardapio>
        <h2>Nossos cafés</h2>
        <ListaOpcoes>
          {bebidas.map((bebida) => {
            return (
              <Opcao key={bebida.id}>
                <Imagem>
                  <img src={bebida.imagem} alt="" width={120} height={120} />
                  <ListaEtiquetas>
                    {bebida.tipo.map((tipo) => {
                      return <Etiqueta key={tipo}>{tipo}</Etiqueta>;
                    })}
                  </ListaEtiquetas>
                </Imagem>

                <Descricao>
                  <h1>{bebida.nome}</h1>
                  <span>{bebida.descricao}</span>
                </Descricao>

                <OpcaoEscolher>
                  <Preco>
                    <span>
                      {currencyFormatterBR(bebida.valor, {
                        replace: true,
                        replaceSearchValue: "R$",
                        replaceValue: "",
                      })}
                    </span>
                  </Preco>
                  <Action>
                    <Contador
                      valor={
                        pedidoItems?.find(
                          (item) => item.bebida.id === bebida.id
                        )?.quantidade ?? 0
                      }
                      aumentar={() => handleAdicionarItem(bebida)}
                      diminuir={() => handleRemoverItem(bebida)}
                    />
                    <CarrinhoItems
                      color="purple-700"
                      mostrarTotalItens={false}
                    />
                  </Action>
                </OpcaoEscolher>
              </Opcao>
            );
          })}
        </ListaOpcoes>
      </Cardapio>
    </HomeContainer>
  );
}
