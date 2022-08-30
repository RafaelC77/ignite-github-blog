import { HeaderContainer } from "./styles";
import headerLogo from "../../assets/header-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLogo} alt="" />
    </HeaderContainer>
  );
}
