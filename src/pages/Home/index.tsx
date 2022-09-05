import { HomeContainer } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { Divulgacao } from "./components/Divulgacao";

export function Home() {
  return (
    <HomeContainer>
      <Divulgacao />
      <h2>Nossos cafés</h2>
    </HomeContainer>
  );
}
