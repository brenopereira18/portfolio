import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#FFFFFF",
  text: "#BCBAC4",
  darkBlue: "#021526",
  gray: "#EFECEC",
  purple: "#864af9",
  blue: " #3572ef",
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
    

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`;
