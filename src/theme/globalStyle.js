import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap');

  body {
    overflow-x: hidden;
    overflow-y: scroll;
    background: #ececf0;
    color: #293347;
    font-family: 'Poppins';
  }

  body::-webkit-scrollbar {
    width: 0.5em;
  }

  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background: -webkit-linear-gradient(top, #fe843f, #fc5a37);
    outline: 1px solid white;
    border-radius: 1em;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  input,
  button {
    font-family: 'Poppins';
  }

  input[placeholder] {
    padding: 10px;
  }
`;

export default GlobalStyle;
