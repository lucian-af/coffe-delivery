import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { Checkout, HeaderContainer, UserLocation } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" width={85} height={40} />
      </NavLink>
      <nav>
        <UserLocation>
          <MapPin size={22} weight="fill" />
          <span>Tupã, SP</span>
        </UserLocation>

        <NavLink to="/checkout" title="carrinho">
          <Checkout>
            <ShoppingCart size={22} weight="fill" />
          </Checkout>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
