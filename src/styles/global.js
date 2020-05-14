import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  @font-face {
  font-family: 'Segoe UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
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
