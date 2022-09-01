import styled from "styled-components";

export const PostsContainer = styled.main`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
`;

export const PostsHeader = styled.header``;

export const PostsInfo = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
  }
`;

export const SearchBox = styled.form`
  margin-top: 0.75rem;

  input {
    appearance: none;
    width: 100%;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    outline: unset;
    font-size: 1rem;
    color: ${(props) => props.theme["base-label"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const PostsList = styled.ul`
  margin-top: 3rem;
  list-style: none;

  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;
