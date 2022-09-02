import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  line-height: 0px;

  span {
    font-weight: 700;
    color: ${(props) => props.theme.blue};
    opacity: 0;

    animation: loading-span;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  svg {
    color: ${(props) => props.theme.blue};

    &:nth-child(1) {
      opacity: 0;
      animation: loading-svg-1;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &:nth-child(2) {
      opacity: 0;
      transform: translate(-20%, 40%);

      animation: loading-svg-2;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    @keyframes loading-span {
      0% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes loading-svg-1 {
      0% {
        opacity: 0;
      }

      75% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes loading-svg-2 {
      0% {
        opacity: 0;
      }

      90% {
        opacity: 1;
      }

      100% {
        opacity: 1;
      }
    }
  }
`;
