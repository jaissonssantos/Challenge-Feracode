import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, border-style, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background-color: #f6f8fa;
    color: #212121;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

  .main {
    width: 1265px;
    margin: 0 auto;
    display: flex;
  }
`;
