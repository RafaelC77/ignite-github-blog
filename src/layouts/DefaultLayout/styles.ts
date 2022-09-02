import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LayoutContent = styled.div`
  margin-top: -5.5rem;
  width: 100%;
  max-width: 864px;

  @media (max-width: 960px) {
    padding: 0 1rem;
  }
`;
