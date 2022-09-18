import { Trash } from "phosphor-react";
import { Contador } from "../../../../components/Contador";
import { Item, Remover, ValorItem } from "./styles";
import { defaultTheme } from "../../../../styles/themes/default";
import { currencyFormatterBR } from "../../../../helpers/CurrencyFormatter";

type Cafe = {
  id: number;
  descricao: string;
  valor: number;
  imagem: string;
};

type PedidoItemProps = {
  cafe: Cafe;
  quantidade: number;
  removerItem: (id: number) => void;
};

export function PedidoItem({ cafe, quantidade, removerItem }: PedidoItemProps) {
  // TODO: usar context para alterar quantidade

  function handleRemoverItem(id: number) {
    removerItem(id);
  }

  return (
    <Item>
      <img src={cafe.imagem} alt="" />
      <div>
        <span>{cafe.descricao}</span>
        <div>
          <Contador valor={quantidade} height="32px" />
          <Remover onClick={() => handleRemoverItem(cafe.id)}>
            <Trash size={16} color={defaultTheme["purple-500"]} />
            Remover
          </Remover>
        </div>
      </div>
      <ValorItem>{currencyFormatterBR(cafe.valor)}</ValorItem>
    </Item>
  );
}
