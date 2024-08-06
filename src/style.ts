import { createGlobalStyle } from "styled-components";

export const colors = {
  text: "#ecfcff",
  black: "#191825",
};

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Montserrat", sans-serif; 
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        padding-top: 80px;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`;
