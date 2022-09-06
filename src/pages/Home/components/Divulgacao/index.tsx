import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/default";
import {
  Overview,
  Slogan,
  Box,
  Vantagem,
  BannerImg,
  DivulgacaoContainer,
  Filter,
} from "./styles";
import Banner from "../../../../assets/banner.svg";

export function Divulgacao() {
  return (
    <DivulgacaoContainer>
      <Filter />
      <Overview>
        <Slogan>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Slogan>
        <Box>
          <Vantagem color={defaultTheme["orange-700"]}>
            <span>
              <ShoppingCart width={16} weight="fill" />
            </span>
            Compra simples e segura
          </Vantagem>
          <Vantagem color={defaultTheme["brown-500"]}>
            <span>
              <Package width={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </Vantagem>
          <Vantagem color={defaultTheme["orange-500"]}>
            <span>
              <Timer width={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </Vantagem>
          <Vantagem color={defaultTheme["purple-500"]}>
            <span>
              <Coffee width={16} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </Vantagem>
        </Box>
      </Overview>
      <BannerImg src={Banner} alt="" />
    </DivulgacaoContainer>
  );
}
