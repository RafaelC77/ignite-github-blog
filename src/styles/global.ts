import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        scrollbar-width: thin;
        scrollbar-color: ${(props) => props.theme["base-profile"]} ${(props) =>
  props.theme["base-label"]};

        ::-webkit-scrollbar {
            width: 0.675rem;
        }

        ::-webkit-scrollbar-track {
            background: ${(props) => props.theme["base-profile"]};
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme["base-label"]};
            border-radius: 99px;

        }
    }

    body {
        background-color: ${(props) => props.theme["base-background"]};
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 992px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 480px) {
        html {
            font-size: 87.5%;
        }
    }
`;
