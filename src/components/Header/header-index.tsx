import { HeaderContainer } from "./header-styles";
import { HeaderContent } from "./header-styles";
import logoImg from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo Ignite" />
        <button>Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  );
}
