import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;

  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`;

export const ProfileContent = styled.div`
  display: flex;
  position: relative;

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
    margin-right: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;

    position: absolute;
    top: 0;
    right: 0;

    transition: 0.2s;

    &:hover {
      border-color: ${(props) => props.theme.blue};
    }

    span {
      font-size: 0.75rem;
      font-weight: 700;
    }

    svg {
      height: 0.75rem;
      width: 0.75rem;
    }
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 160%;
    margin-bottom: 1.5rem;
  }
`;

export const GithubStats = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-top: auto;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 1.125rem;
    width: 1.125rem;
    color: ${(props) => props.theme["base-label"]};
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
