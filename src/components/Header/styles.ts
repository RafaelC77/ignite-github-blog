import styled from "styled-components";
import headerBackground from "../../assets/header-background.png";

export const HeaderContainer = styled.header`
  width: 100vw;
  background-image: url(${headerBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 0 8.375rem;

  display: flex;
  justify-content: center;

  img {
    height: 6.125rem;
  }
`;
