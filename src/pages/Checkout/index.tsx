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
import { useContext } from "react";
import { EnderecoForm } from "./components/EnderecoForm";
import { FormaPagamento } from "./components/FormaPagamento";
import { PedidoItem } from "./components/PedidoItem";
import { currencyFormatterBR } from "../../helpers/CurrencyFormatter";
import { useNavigate } from "react-router-dom";
import {
  FormasPagamento,
  formasPagamento,
  OpcaoPagamento,
  UF,
  VALOR_ENTREGA,
} from "../../data/data";
import { PedidoContext } from "../../contexts/PedidoContext";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const enderecoFormValidationSchema = zod
  .object({
    cep: zod.string().min(8, "O CEP deve conter 8 dígitos!"),
    logradouro: zod.string().min(3, "O campo é obrigatório!"),
    numero: zod.string().min(1, "O campo é obrigatório!"),
    complemento: zod
      .string()
      .max(50, "Limite de caracteres atingido: 50")
      .optional(),
    bairro: zod.string().min(3, "O campo é obrigatório!"),
    cidade: zod.string().min(3, "O campo é obrigatório!"),
    uf: zod.string().refine(
      (val) => UF.find((uf) => uf.sigla === val),
      () => ({
        message: `UF não encontrada`,
      })
    ),
  })
  .required();

type EnderecoFormData = zod.infer<typeof enderecoFormValidationSchema>;

export function Checkout() {
  const { pedidoItems, pedido, selecionarFormaPagamento, confirmarPedido } =
    useContext(PedidoContext);

  const navigate = useNavigate();
  const valorEntrega = currencyFormatterBR(VALOR_ENTREGA);
  const podeConfirmarPedido = valorTotalItens() > 0 && pedido.formaPagamento;
  const enderecoForm = useForm<EnderecoFormData>({
    resolver: zodResolver(enderecoFormValidationSchema),
    defaultValues: {
      cep: pedido.endereco?.cep,
      logradouro: pedido.endereco?.logradouro,
      numero: pedido.endereco?.numero,
      complemento: pedido.endereco?.complemento,
      bairro: pedido.endereco?.bairro,
      cidade: pedido.endereco?.cidade,
      uf: pedido.endereco?.uf,
    },
  });

  const { handleSubmit } = enderecoForm;

  function handleConfirmarPedido(endereco: EnderecoFormData) {
    const pedidoValido =
      endereco &&
      pedido.formaPagamento &&
      pedidoItems.length > 0 &&
      pedido.valorTotal > 0;

    if (pedidoValido) {
      confirmarPedido(endereco);
      navigate("/success", { replace: true });
    }
  }

  function renderCardOpcaoPagamento(opcaoPagamento: OpcaoPagamento) {
    switch (opcaoPagamento.formaPagamento) {
      case FormasPagamento.CartaoCredito:
      case FormasPagamento.CartaoDebito:
        return <CreditCard size={16} color={defaultTheme["purple-500"]} />;
      case FormasPagamento.Dinheiro:
        return <Money size={16} color={defaultTheme["purple-500"]} />;
    }
  }

  function valorTotalPedidoMaisEntregaFormatado(): string {
    return currencyFormatterBR(
      pedido.valorTotal ? pedido.valorTotal + VALOR_ENTREGA : 0
    );
  }

  function valorTotalItensFormatado(): string {
    return currencyFormatterBR(pedido.valorTotal);
  }

  function valorTotalItens(): number {
    return pedido.valorTotal;
  }

  function handleSelecionarFormaPagamento(
    formaPagamento: FormasPagamento
  ): void {
    selecionarFormaPagamento(formaPagamento);
  }

  return (
    <Wrapper>
      <form action="" onSubmit={handleSubmit(handleConfirmarPedido)}>
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

            <FormProvider {...enderecoForm}>
              <EnderecoForm />
            </FormProvider>
          </Endereco>

          <Pagamento>
            <SubTitulo>
              <div>
                <CurrencyDollar size={22} color={defaultTheme["purple-500"]} />
              </div>
              <div>
                <h2>Pagamento</h2>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </SubTitulo>

            <CardsPagamento>
              {formasPagamento.map((forma) => {
                return (
                  <FormaPagamento
                    key={forma.formaPagamento}
                    descricao={forma.formaPagamento}
                    formaPagamento={forma.formaPagamento}
                    onClick={() =>
                      handleSelecionarFormaPagamento(forma.formaPagamento)
                    }
                  >
                    {renderCardOpcaoPagamento(forma)}
                  </FormaPagamento>
                );
              })}
            </CardsPagamento>
          </Pagamento>
        </Article>

        <Aside>
          <Titulo>Cafés selecionados</Titulo>
          <Items>
            {pedidoItems.map((item) => {
              return (
                <PedidoItem
                  key={item.id}
                  bebida={item.bebida}
                  quantidade={item.quantidade}
                />
              );
            })}

            <div>
              <Resumo size="font_16" weight={400}>
                <h5>Total de itens</h5>
                <span>{valorTotalItensFormatado()}</span>
              </Resumo>
              {valorTotalItens() > 0 && (
                <Resumo size="font_16" weight={400}>
                  <h5>Entrega</h5>
                  <span>{valorEntrega}</span>
                </Resumo>
              )}
              <Resumo
                size="font_20"
                weight={700}
                color={defaultTheme["brown-700"]}
              >
                <span>Total</span>
                <span>{valorTotalPedidoMaisEntregaFormatado()}</span>
              </Resumo>
            </div>
            <Button type="submit" disabled={!podeConfirmarPedido}>
              confirmar pedido
            </Button>
          </Items>
        </Aside>
      </form>
    </Wrapper>
  );
}
