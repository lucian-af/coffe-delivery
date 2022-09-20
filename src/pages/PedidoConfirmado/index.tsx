import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Container, Info, Section } from "./styles";
import BannerPedidoConfirmado from "../../assets/pedido_confirmado.svg";
import { useContext } from "react";
import { PedidoContext } from "../../contexts/PedidoContext";

export function PedidoConfirmado() {
  // TODO: usar context para mostrar dados endereço e formaPagamento
  const { formaPagamentoSelecionada } = useContext(PedidoContext);
  return (
    <Container>
      <h1>Uhu! Pedido Confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <main>
        <Section>
          <Info backgroundIcon="purple-500">
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </Info>
          <Info backgroundIcon="orange-500">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 - min</strong>
            </div>
          </Info>
          <Info backgroundIcon="orange-700">
            <span>
              <CurrencyDollar size={16} />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{formaPagamentoSelecionada()}</strong>
            </div>
          </Info>
        </Section>
        <img src={BannerPedidoConfirmado} alt="" />
      </main>
    </Container>
  );
}
