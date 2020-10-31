import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body {
    font-family: 'Nanum Gothic', sans-serif; 
    color: #fff;
    background-color: #202020;
    padding: 0;
    margin: 0;
  }
  
  body * {
    box-sizing: border-box;
    &::selection {
      background-color: rgba(79,192,141,0.5);
    }
  }
  
  ul, ol, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  dl, dt, dd {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: #fff;
  }
  
  button, input, textarea, select, option {
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
    background: none;
  }
`;

export default GlobalStyles;