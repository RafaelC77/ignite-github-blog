import styled from "styled-components";

export const CardComponent = styled.li`
  max-width: 416px;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;

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
