import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#FFFFFF",
  gray: "#BCBAC4",
  darkBlue: "#021526",
  purple: "#864af9",
  blue: "#3572ef",
  lightPurple: "#8576ff",
};

export const breakpoints = {
  tablet: "1023px",
  mobile: "767px",
};

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Montserrat", sans-serif; 
        scrollbar-width: thin; 
        scrollbar-color: ${colors.gray};        
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }    

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: ${breakpoints.tablet}) {
            max-width: 90%;
        }
    }            
`;
