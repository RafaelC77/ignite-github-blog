import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
`;

export const PostInfo = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;

  h1 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    border-bottom: 1px solid transparent;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: 0.2s;

    &:hover {
      border-color: ${(props) => props.theme.blue};
    }
  }
`;

export const InfoBar = styled.div`
  display: flex;
  column-gap: 2rem;
  row-gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["base-label"]};
    height: 1.125rem;
    width: 1.125rem;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  a {
    color: ${(props) => props.theme.blue};
  }

  p {
    margin-bottom: 1rem;
  }

  p + p {
    margin: 1rem 0;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 2rem;
  }
`;
