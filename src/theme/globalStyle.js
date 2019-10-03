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
  button,
  textarea {
    font-family: 'Poppins';
  }

  input[placeholder],
  textarea[placeholder] {
    padding: 10px;
  }

  progress {
		display: block;
		width: 50%;
		padding: 4px;
		border: 0 none;
		background: #444;
		border-radius: 14px;
		box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
			0px 1px 0px rgba(255, 255, 255, 0.2);
	}

	progress::-moz-progress-bar {
		border-radius: 12px;
		background: #fff;
		box-shadow: inset 0 2px 5px 0px #ff9800;
	}

	progress::-webkit-progress-bar {
		background: transparent;
	}

	progress::-webkit-progress-value {
		border-radius: 12px;
		background: #ff9800;
		box-shadow: inset 0 2px 5px 0px #ff9800;
	}

  .custom-file-input {
    color: transparent;
    width: 143.91px;
    height: 31px;
  }

  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }

  .custom-file-input::before {
    content: 'Choose an image';
    color: white;
    display: block;
		background: -webkit-linear-gradient(left, #fe843f, #fc5a37);
    border: none;
    border-radius: 10px;
    padding: 5px 8px;
    outline: none;
    cursor: pointer;
    font-size: .9rem;
  }

  .custom-file-input:active {
    outline: 0;
  }

  .custom-file-input:active::before {
		background: -webkit-linear-gradient(left, #fe843f, #fc5a37);
  }
`;

export default GlobalStyle;
