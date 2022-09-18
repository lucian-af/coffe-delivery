import { CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import {
  CardsPagamento,
  Wrapper,
  Endereco,
  Pagamento,
  Items,
  SubTitulo,
  Titulo,
  Article,
  Aside,
  Button,
  Resumo,
} from "./styles";

import { defaultTheme } from "../../styles/themes/default";
import { useCallback, useState } from "react";
import { EnderecoForm } from "./components/EnderecoForm";
import { FormaPagamento } from "./components/FormaPagamento";
import { PedidoItem } from "./components/PedidoItem";
import CafeAmericano from "../../assets/cardapio/Type=Americano.svg";
import { currencyFormatterBR } from "../../helpers/CurrencyFormatter";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const [formaPagamentoSelecionada, setFormaPagamentoSelecionada] =
    useState(true);

  const navigate = useNavigate();

  function handleRemoverItem(id: number) {
    // remover pedido item
    console.log(id);
  }

  function handleConfirmarPedido() {
    navigate("/success", { replace: true });
  }

  return (
    <Wrapper>
      <Article>
        <Titulo>Complete seu pedido</Titulo>

        <Endereco>
          <SubTitulo>
            <div>
              <MapPinLine size={22} color={defaultTheme["orange-700"]} />
            </div>
            <div>
              <h2>Endereço de Entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </SubTitulo>

          <EnderecoForm />
        </Endereco>

        <Pagamento>
          <SubTitulo>
            <div>
              <CurrencyDollar size={22} color={defaultTheme["purple-500"]} />
            </div>
            <div>
              <h2>Pagamento</h2>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </SubTitulo>

          <CardsPagamento>
            <FormaPagamento
              descricao="cartão de crédito"
              selecionada={formaPagamentoSelecionada}
            >
              <CreditCard size={16} color={defaultTheme["purple-500"]} />
            </FormaPagamento>

            <FormaPagamento descricao="cartão de débito">
              <CreditCard size={16} color={defaultTheme["purple-500"]} />
            </FormaPagamento>

            <FormaPagamento descricao="dinheiro">
              <Money size={16} color={defaultTheme["purple-500"]} />
            </FormaPagamento>
          </CardsPagamento>
        </Pagamento>
      </Article>

      <Aside>
        <Titulo>Cafés selecionados</Titulo>
        <Items>
          <PedidoItem
            cafe={{
              id: 1,
              descricao: "Expresso Tradicional",
              valor: 9.9,
              imagem: CafeAmericano,
            }}
            quantidade={1}
            removerItem={() => handleRemoverItem(1)}
          />
          <hr color={defaultTheme["gray-300"]} />
          <PedidoItem
            cafe={{
              id: 2,
              descricao: "Expresso Tradicional",
              valor: 19.9,
              imagem: CafeAmericano,
            }}
            quantidade={3}
            removerItem={() => handleRemoverItem(2)}
          />
          <hr color={defaultTheme["gray-300"]} />
          <div>
            <Resumo size="font_16" weight={400}>
              <h5>Total de itens</h5>
              {/* TODO: alterar */}
              <span>{currencyFormatterBR(29.7)}</span>
            </Resumo>
            <Resumo size="font_16" weight={400}>
              <h5>Entrega</h5>
              {/* TODO: alterar */}
              <span>{currencyFormatterBR(3.5)}</span>
            </Resumo>
            <Resumo
              size="font_20"
              weight={700}
              color={defaultTheme["brown-700"]}
            >
              <span>Total</span>
              {/* TODO: alterar */}
              <span>{currencyFormatterBR(33.2)}</span>
            </Resumo>
          </div>
          <Button onClick={handleConfirmarPedido}>confirmar pedido</Button>
        </Items>
      </Aside>
    </Wrapper>
  );
}
