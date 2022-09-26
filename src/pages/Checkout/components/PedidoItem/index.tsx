import { Trash } from "phosphor-react";
import { Contador } from "../../../../components/Contador";
import { Item, Remover, ValorItem } from "./styles";
import { defaultTheme } from "../../../../styles/themes/default";
import { currencyFormatterBR } from "../../../../helpers/CurrencyFormatter";
import { Bebida } from "../../../../data/data";
import { useContext } from "react";
import { PedidoContext } from "../../../../contexts/PedidoContext";

type PedidoItemProps = {
  bebida: Bebida;
  quantidade: number;
};

export function PedidoItem({ bebida, quantidade }: PedidoItemProps) {
  const {
    pedidoItems,
    adicionarPedidoItem,
    diminuirQuantidadePedidoItem,
    removerItem,
  } = useContext(PedidoContext);

  function handleAdicionarQuantidadeItem(bebida: Bebida) {
    adicionarPedidoItem(bebida);
  }

  function handleRemoverQuantidadeItem(bebida: Bebida) {
    const item = pedidoItems.find((item) => item.bebida.id === bebida.id);
    if (item?.quantidade === 1) return;

    diminuirQuantidadePedidoItem(bebida);
  }

  function handleRemoverItem(bebida: Bebida) {
    removerItem(bebida);
  }

  return (
    <>
      <Item key={bebida.id}>
        <img src={bebida.imagem} alt="" />
        <section>
          <div>
            <span>{bebida.nome}</span>
            <ValorItem>
              {currencyFormatterBR(bebida.valor * quantidade)}
            </ValorItem>
          </div>
          <div>
            <Contador
              valor={quantidade}
              height="32px"
              aumentar={() => handleAdicionarQuantidadeItem(bebida)}
              diminuir={() => handleRemoverQuantidadeItem(bebida)}
            />
            <Remover onClick={() => handleRemoverItem(bebida)}>
              <Trash size={16} color={defaultTheme["purple-500"]} />
              Remover
            </Remover>
          </div>
        </section>
      </Item>
      <hr color={defaultTheme["gray-300"]} />
    </>
  );
}
