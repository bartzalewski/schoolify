import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap');

  body {
    overflow-x: hidden;
    overflow-y: scroll;
    background: #ececf0;
    color: #293347;
    font-family: 'Poppins';
  }

  ::selection {
    background: #FE843F;
    color: white;
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
  textarea, select {
    font-family: 'Poppins';
    outline: none;
  }

  input:focus::placeholder,
  textarea:focus::placeholder {
    color: transparent !important;
  }

  input[placeholder],
  textarea[placeholder] {
    padding: 10px;
  }

  progress {
    visibility: hidden;
    width: 1px;
    height: 1px;
  }

  .custom-file-input {
    color: transparent;
    width: 175px;
    height: 50px;
    border: none;
    border-radius: 10px;
  }

  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }

  .custom-file-input::before {
    content: 'Choose an image';
    color: #293347;
    display: block;
		background: white;
    border: none;
    border-radius: 10px;
    padding: 5px 8px;
    outline: none;
    cursor: pointer;
    font-size: .9rem;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .custom-file-input:active {
    outline: 0;
  }

  .custom-file-input:active::before {
		background: white;
  }

  .input-aside {
		border-radius: 10px;
		border: none;
		width: 125px;
		padding: 5px 10px !important;
		text-align: center;
		background: #ececf0;

		::placeholder {
			color: #293347;
		}

		@media (max-width: 1359px) {
			padding: 2.5px 5px !important;
			font-size: 0.8rem;
		}
	}

  .site-container {
    width: 680px;
    background: #ececf0;

    h1 {
      font-size: 1.625rem;
      font-weight: 600;
      user-select: none;
    }

    @media (max-width: 1124px) {
      width: 80%;
    }

    @media (max-width: 813px) {
      width: 100%;

      .container {
        padding: 10px;
      }

      h1 {
        font-size: 1.2rem;
      }
    }
  }

  .btn {
		border-radius: 10px;
		background: -webkit-linear-gradient(left, #fe843f, #fc5a37);
		color: #fff;
		font-weight: 600;
		border: none;
		height: 50px;
		width: fit-content;
		font-size: 1.125rem;
		cursor: pointer;
		padding: 10px 25px;
		position: relative;
		transition: 0.2s;

		&:hover {
			transform: scale(1.05);
			transition: 0.2s;
		}
	}

	.btn-choose {
		background: #fff;
		font-weight: 400;
		font-size: 0.9rem;
		color: #293347;
    transition: none;

		&:hover {
			transform: none;
			transition: none;
		}
	}

  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 1124px) {
    .aside-reminders, .aside-homework, .aside-tests {
      border-top: none !important;
      border-right: none !important;
      border-left: none !important;
    }
  }
`;

export default GlobalStyle;
