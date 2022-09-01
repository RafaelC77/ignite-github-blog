import headerLogo from "../../assets/header-logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLogo} alt="" />
    </HeaderContainer>
  );
}
