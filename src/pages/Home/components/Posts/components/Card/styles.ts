import styled from "styled-components";

export const CardContainer = styled.li`
  max-width: 416px;

  a:hover {
    text-decoration: none;
  }
`;

export const CardContent = styled.div`
  height: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;

  &:hover {
    outline: 2px solid ${(props) => props.theme["base-label"]};
  }

  p {
    margin-top: 1.2rem;
  }

  p + p {
    margin-top: 0.5rem;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
    max-width: 283px;
    line-height: 160%;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
    text-align: right;
    line-height: 160%;
  }
`;
